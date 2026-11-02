# Build statis Vite, disajikan nginx.
FROM node:22-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
# Coolify menyuntik NODE_ENV=production saat build; devDependencies (vite, tsc) tetap dibutuhkan.
RUN npm ci --include=dev
COPY . .
RUN npm run build

# Salinan .webp di samping tiap PNG/JPG; disimpan hanya kalau lebih kecil dari aslinya.
# Kode tidak diubah — nginx yang memilih .webp untuk browser yang mendukungnya.
FROM alpine:3.20 AS webp
RUN apk add --no-cache libwebp-tools
COPY --from=builder /app/dist /dist
RUN find /dist -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0 \
    | xargs -0 -P 4 -I{} sh -c 'cwebp -quiet -mt -q 82 "$1" -o "$1.webp" && [ $(stat -c%s "$1.webp") -lt $(stat -c%s "$1") ] || rm -f "$1.webp"' _ {}

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=webp /dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

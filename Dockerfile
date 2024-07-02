# Menggunakan image node sebagai base image
FROM node:18

# Menentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin semua file proyek ke dalam container
COPY . .

# Menexpose port yang digunakan aplikasi
EXPOSE 8081

# Menjalankan aplikasi
CMD [ "node", "index.js" ]

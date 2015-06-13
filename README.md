# Presentasi Botnet
> Menggunakan presentasi [Bespoke.js](http://markdalgleish.com/projects/bespoke.js), dibuat menggunakan [generator-bespoke](https://github.com/markdalgleish/generator-bespoke)

## Untuk Membuka Slide Pada Repo Lokal

Pertama, pastikan applikasi dan paket berikut telah diinstall.

1. [Node.js](http://nodejs.org)
2. [Bower](http://bower.io): `$ npm install -g bower`
3. [Gulp](http://gulpjs.com): `$ npm install -g gulp`

Kemudian, instal dependensi dan jalankan tampilan:

```bash
$ npm install && bower install
$ gulp serve
```

## Perlu Diperhatikan

Untuk menghindari kesalahan serius (`merge` yang tidak diinginkan) pada repo server, diharapkan untuk membuat `branch` terlebih dahulu, dan lakukan perubahan pada branch.
Cara membuatnya dapat dilakukan dengan `$ git checkout -b 'nama-branch'`

Selengkapnya harap baca modul 14-GitFlow
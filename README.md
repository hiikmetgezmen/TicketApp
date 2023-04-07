# TicketApp



TicketApp, bir bilet satın alma uygulamasıdır.


## Özellikler

- Kullanıcı validasyonu.
- Tamamen asenkron çalışma yapısı.
- SOLID prensiplerine uygun geliştirme.
- Repository deseninin uygulanması.
- Code First Database tasarımı.
- Json Web Token kullanımıyla kapsamlı kullanıcı ve token yönetimi.



## Kullanım
Başlamak için öncelikle sisteme üye olmak gerekiyor. Üye olunduktan sonra kullanıcımız sisteme giriş yapıyor.

Giriş yapan kullanıcı otobüs seferlerini listeyebilir. İstediği seferin ayrıntılarını görebilir.

İstediği koltuğu seçip bileti satın alabilir. Aynı otobüste en fazla 5 koltuk satın alabilir.
 

## Kurulum
Server projelerinin içerisinde bullanan .env.example dosyalarının adlarını .env olacak şekilde yeniden adlandırın ve içerisinde istenilen bilgileri düzenleyin

### Server projesinin kurulumu

```bash
$ cd server
$ npm install
```
```bash
# development
$ npm run dev

# build
$ npm run build

# preview
$ npm run preview
```


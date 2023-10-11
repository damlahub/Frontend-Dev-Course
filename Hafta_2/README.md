# Hafta 02
## Ders 04

Bu ders boyunca form etiketlerini öğrendik. Ardından ise başka bir formu kendi başımıza yaptık.

https://github.com/damlahub/Frontend-Dev-Course/assets/69016971/80368fde-3027-4f73-9d44-339f91c2b9e2

```html
 <form action="" method="get"></form>
```
method - Hangi metod kullanılarak form değerleri iletileceği belirlenir.

action - Form bilgilerinin hangi adrese gönderileceği belirlenir.

"post" daha güvenli bir seçenekken, "get" daha güvensizdir.

```html
<input type="text" name="username" id="username" value="User Name" placeholder="username" title="username" autofocus required>
```

```type``` input tipini belirtir.

```name``` veri tabanında gözükecek ismi.

```id``` inputun idsi

```value``` Varsayılan değer.

```placeholder``` Silik tıklandığında silinen yazı.

```title``` inputun başlığı, üstüne gelindiğinde gözüken isimdir.

```autofocus``` odaklar. Dezavantaj sayfayı en alta götürür. Bu yüzden üstte olması daha iyidir.

```required``` Zorunlu Alan

```html
        <label for="username">
            Kullanıcı Adı: 
        </label>
           <input type="text" id="username">
```

```for``` id'si "username" olan inputla ilişkilendirir ve içindeki içeriğe tıklandığında, id'si "username" olan input'a gider.

## Ders 05

Eski Facebook login sayfasının klonunu yaptık.

![fb-clone](https://github.com/damlahub/Frontend-Dev-Course/blob/main/Hafta_2/ss/facebook_clone.png)



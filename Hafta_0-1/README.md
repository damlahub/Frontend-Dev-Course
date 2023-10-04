# Hafta 00

## Ders 00
Bu derste Visual Code'un temel kullanımını öğrendikten sonra HTML ve CSS'in temellerine geçtik.

![ders-00](https://github.com/damlahub/Frontend-Dev-Course/blob/main/Hafta_0-1/ss/Images/ders-00-top0.png)

İlk sayfamızın üst kısmını inceleyelim.

```html
 Frontend <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate ut quo totam laboriosam iste quam.
    Distinctio quis dolorem animi aliquam molestiae maiores voluptatum harum amet saepe laborum rerum quas odio
    molestias dolor vero unde aliquid ullam delectus autem sit asperiores, necessitatibus quo neque? Natus?
    <p>Lorem ipsum dolor sit amet.</p>
    <u>Damla</u> <br>
    <u><i>Öksel</i></u> <br>
    <b>Lorem ipsum <u>dolor</u> sit amet.</b>
```
```<br>```  Bir sonraki satıra geçmeyi sağlar.

```<p></p>```  Bir paragraf oluşturur.

```<u></u>```  Yazının altını çizer.

```<i></i>```  Yazıyı italik yapar.

```<b></b>```  Yazıyı kalınlaştırır.

HTML'de başlık etiketleri aşağıdaki gibidir.

En büyük başlık etiketi h1 ve en küçük başlık etiketi ise h6'dır.

```html
    <!-- Baslık Etiketleri -->
    <h1>Baslik 1</h1>
    <h2>Baslik 2</h2>
    <h3>Baslik 3</h3>
    <h4>Baslik 4</h4>
    <h5>Baslik 5</h5>
    <h6>Baslik 6</h6>
```
![ders-00-abbr](https://github.com/damlahub/Frontend-Dev-Course/blob/main/Hafta_0-1/ss/GIF/abbr.gif)

```<abbr title="Bu bir metin.">Bu Nedir?</abbr>```  İpucu vermemize olanak sağlar.

Biz fotoğrafa bastığımızda bir başka sayfaya geçmek istedik. Bunun için ise aşağıdaki etiketleri kullandık.

```html
    <a href="page2.html" target="_parent">
        <img src="bg.jpg" title="Kamp">
    </a>
```

```<a href="page2.html" target="_parent">``` etiketini anlatmam gerekirse,
- ```<a></a>``` etiketi bir bağlantı oluşturur. Bu etiket birçok özellik içerir.
- href="page.html" yönlendirmek istediğimiz bağlantımızı href="" içine yazıyoruz.
- target="_parent" ise sekmenin hangi şekide açılacağını belirtmek içindir. (Farklı sekme? Aynı sekme?...) 

Şimdi ise sayfamızın alt kısmını inceleyelim. 

Sayfamızın alt kısmında sıralı liste, sırasız liste ve iç içe liste yapmayı öğrendik.

![ders-00-bottom](https://github.com/damlahub/Frontend-Dev-Course/blob/main/Hafta_0-1/ss/Images/ders-00-bottom0.png)

İlk öncelikle "ol" ve "ul" etiketleri ile sıralı-sırasız bir liste oluşturacağınızı belirtiyorsunuz. Daha sonrasında ise "li" etiketi ile listenin içine oluşturmak istediğiniz içerikleri belirtiyorsunuz.

Liste oluştururken kısayol: ol>li*3{liste} 

## Sırasız Liste

```html
    <ul type="circle">
        <li>Damla</li>
        <li>Öksel</li>
        <li>22</li>
    </ul>
```

```<ul></ul>``` Sırasız bir liste oluşturacağımız anlamına gelir.

```<li></li>``` Listemizdeki ögeleri temsil eder.

```type="circle"``` bu listenin bir özelliğidir. Liste ögelerinin işaret tipini belirler.(disc, square, circle)

## Sıralı Liste

```html
    <ol reversed start="5" >
        <li>liste</li>
        <li>liste</li>
        <li>liste</li>
    </ol>
```

```<ol></ol>``` Sıralı bir liste oluşturacağımız anlamına gelir.

```<li></li>``` Listemizdeki ögeleri temsil eder.

```start="5"``` Listemizin beş numaradan başlayacağı anlamına gelir ve "altıncı, yedinci..." olarak devam eder.

```reversed``` Bu ise listenin sırasını tam tersine çevirir. Örneğin; 1-2-3 => 3-2-1 olur.

## İç İçe Liste

```html
    <ol>
        <li>damla</li>
        <li>damla
            <ul type="circle">
                <li>merhaba</li>
                <li>merhaba</li>
            </ul>
        </li>
        <li>damla</li>
    </ol>
```

Bu koda baktığımızda, ilk olarak sıralı bir liste oluşturduk. Daha sonrasında bu listemize ögelerimizi ekledikten sonra listemizin ikinci ögesinin içine bir sırasız liste oluşturduk ve içine tekrardan ögelerimizi ekledik. Eklediğimiz ögelerin işaret tipini ise "circle" olarak belirttik.

Şimdi de resmimize bastığımızda geçtiğimiz ikinci sayfayı inceleyelim.

![page2](https://github.com/damlahub/Frontend-Dev-Course/blob/main/Hafta_0-1/ss/Images/ders-00-page2_0.png)

İkinci sayfamızda CSS'e giriş yaptığımızı söyleyebilirim.

İlk öncelikle "class" ve "id" kavramlarını çok iyi bilmemiz gerekir.

"id" (Kimlik): Tıpkı T.C. Kimlik Numaranız gibi, her bir öge için benzersiz bir tanımlama sağlar. Her öge sadece bir id'ye sahip olabilir.

"class" (Sınıf): Saç renginiz gibi, bir grup ögeyi belirlemek için kullanılır. Bir öğe birden çok sınıfa ait olabilir.

Derste yaptıklarımıza bakma zamanı geldi!

```html
    <div class="box">
        <p>Damla</p>
    </div>
    <section>
        MERHABA, DÜNYA!
    </section>
```

```<div></div>``` Sayfamızda bir bölüm oluşturur.

```<section></section>``` Sayfamızda bir bölüm oluşturur ve HTML5' de bu etiketi kullanıyoruz.

Arasındaki fark ne diye ChatGPT'ye soralım.

> div Elementi:
>> div (division) elementi, belirli bir bölgeyi gruplamak, stil vermek veya JavaScript ile etkileşim eklemek gibi genel amaçlı kullanılan bir yapı elemanıdır. Temelde bir konteyner görevi görür ve içine herhangi bir HTML içeriği alabilir. Özel bir anlamı veya stili yoktur, sadece içindeki öğeleri bir araya getirir.
> section Elementi:
>> <section> elementi, belirli bir belge veya uygulama içinde bağımsız, bölümlenmiş bir içeriği temsil eder. Bu içerik, genellikle kendi başına anlamlı bir bölüm oluşturur ve başlık (h1, h2, vb.) ile birlikte kullanılır. Sayfanın yapısını belirtmek için kullanılır ve SEO açısından önemlidir.

```
    <div class="box">
        <p>Damla</p>
    </div>
```

Bir adet div oluşturduk ve bu divimize "box" classı verdik. İçine ise bir paragraf etiketi ekledik. Şimdi ise CSS kodlarımıza bakalım.

```css
.box{
    width: 200px;
    height: 200px;
    color: red;
    background-color: black;
    text-align: center;
}
```

```width / height``` Genişlik / Yükseklik

```color``` Yazı rengini belirtir.

```background-color``` Arka plan rengini değiştirir.

```text-align``` Yazı konumunu ayarlar. left - center - right => start - center - end 

Şimdi ise "section" css'ine bakalım.

```css
section{
    width: 100%;
    height: 200px;
    background-color: black;
    color:white;
    margin-top: 25px;
    box-shadow: 5px 5px 10px 3px black;
    border-radius: 20%;
    text-align: center;
    line-height: 200px;
}
```
margin => dış boşluk    padding=> iç boşluk

```margin-top``` Bölümümüzün dış üst tarafından boşluk verir.

```box-shadow``` Bölümümüze gölge verir. (x ekseni, y ekseni , puslandırma, yayılma, renk)

```border-radius``` Köşeleri yuvarlar.

```line-height``` Satır yüksekliğini belirtir.

## Ders 01
Bu ders ise HTML ile birlikte temel CSS öğrendik ve HTML5 temel etiketlerine giriş yaptık. İlk bölümü hocamız yaptı ve daha ikinci bölümü ise bizim yapmamızı istedi.   


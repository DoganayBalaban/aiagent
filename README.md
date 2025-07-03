# KAI-Fusion

KAI-Fusion, görsel olarak iş akışları (workflow) oluşturmanıza, özelleştirilebilir AI ajanları ve koşul tabanlı dallanmalar ile otomasyon süreçleri tasarlamanıza olanak tanıyan modern bir web uygulamasıdır. Sürükle-bırak arayüzü sayesinde teknik bilgi gerektirmeden güçlü otomasyonlar geliştirebilirsiniz.

## Özellikler

- **Görsel Workflow Tasarımı:** Sürükle-bırak ile iş akışları oluşturun, AI ajanları ve koşul düğümleri ekleyin.
- **AI Agent Konfigürasyonu:** OpenAI (GPT-4) gibi modellerle çalışan, araç ve hafıza yönetimi yapılabilen özelleştirilebilir ajanlar.
- **Koşul Tabanlı Dallanma:** Mantıksal koşullar ile iş akışında dallanma ve karar mekanizmaları kurun.
- **API Anahtarı ve Kimlik Bilgisi Yönetimi:** Harici servisler için güvenli credential yönetimi.
- **Şablonlar ve Değişkenler:** Tek tıkla tekrar kullanılabilir workflow şablonları ve uygulama değişkenleri tanımlayın.
- **Kullanıcı Dostu Arayüz:** Modern, responsive ve tema destekli arayüz.
- **İzleme ve Raporlama:** Workflow yürütme geçmişi ve istatistiksel özetler.
- **Docker ile Kolay Dağıtım:** Hazır Dockerfile ile hızlı kurulum ve dağıtım.

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
cd client
npm install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

### 3. Üretim Derlemesi

```bash
npm run build
```

### 4. Docker ile Çalıştırma

```bash
docker build -t kai-fusion .
docker run -p 3000:3000 kai-fusion
```

## Ana Modüller

- **Workflows:** Otomasyon iş akışlarını oluşturun, yönetin ve görselleştirin.
- **Executions:** Workflow yürütme geçmişini ve durumlarını izleyin.
- **Credentials:** API anahtarları ve harici servis kimlik bilgilerini güvenle saklayın.
- **Templates:** Hazır workflow şablonlarını kullanın veya kendi şablonlarınızı oluşturun.
- **Variables:** Uygulama genelinde kullanılacak değişkenleri yönetin.
- **Kullanıcı Yönetimi:** Kayıt olma, giriş yapma ve oturum yönetimi.

## Kullanılan Teknolojiler

- **React 19** & **TypeScript**
- **React Router 7**
- **Redux Toolkit**
- **React Flow** (görsel akış diyagramları için)
- **TailwindCSS** & **DaisyUI**
- **Vite** (hızlı geliştirme ve derleme)
- **Docker**

## Klasör Yapısı (Özet)

```
aiagent/
  └─ client/
      ├─ app/
      │   ├─ components/   # UI ve canvas bileşenleri
      │   ├─ redux/        # State yönetimi
      │   ├─ routes/       # Sayfa ve modül rotaları
      │   └─ ...
      ├─ public/           # Statik dosyalar (logo, favicon)
      ├─ package.json      # Bağımlılıklar
      ├─ Dockerfile        # Docker yapılandırması
      └─ ...
```

## Katkı ve Lisans

Bu proje, modern otomasyon ve AI workflow geliştirme için açık kaynaklı bir temel sunar. Katkıda bulunmak için lütfen bir pull request açın.

---

Geliştirici ve kullanıcı dostu bir otomasyon platformu: **KAI-Fusion** 🚀
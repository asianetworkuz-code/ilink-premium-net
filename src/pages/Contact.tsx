import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              {t('contact.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('contact.address')}
                </h3>
                <p className="text-muted-foreground">
                  Tashkent, Uzbekistan<br />
                  Mirzo Ulugbek District
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('contact.phone')}
                </h3>
                <p className="text-muted-foreground">
                  +998 71 200 00 00<br />
                  +998 71 200 00 01
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('contact.email')}
                </h3>
                <p className="text-muted-foreground">
                  info@ilink.uz<br />
                  support@ilink.uz
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3099584107886!2d69.2401163!3d41.3111846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

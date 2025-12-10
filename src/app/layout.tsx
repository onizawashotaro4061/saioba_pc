import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: "劇団さいおうば公式サイト",
  description: "劇団さいおうばの公式サイト",
  icons: {
    icon: "/img/fabicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script id="typekit" strategy="beforeInteractive">
          {`
            (function(d) {
              var config = {
                kitId: 'mre4qgi',
                scriptTimeout: 3000,
                async: true
              },
              h = d.documentElement, t = setTimeout(function() {
                h.className = h.className.replace(/\\bwf-loading\\b/g, "") + " wf-inactive";
              }, config.scriptTimeout), tk = d.createElement("script"), f = false,
              s = d.getElementsByTagName("script")[0], a;
              h.className += " wf-loading";
              tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
              tk.async = true;
              tk.onload = tk.onreadystatechange = function() {
                a = this.readyState;
                if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t);
                try { Typekit.load(config) } catch (e) {}
              };
              s.parentNode.insertBefore(tk, s)
            })(document);
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

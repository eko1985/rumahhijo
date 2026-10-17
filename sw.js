/* Rumah HIJO service worker: menyimpan seluruh aplikasi dan dokumen agar bisa dipakai offline */
const VERSION = "rumahhijo-v8e9d4ceb21";
const FILES = ["./", "icons/apple-touch-icon.png", "icons/favicon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "real/r-audit-kewaspadaan/thumb.webp", "real/r-audit-permukaan/thumb.webp", "real/r-ceklis-outbreak/thumb.webp", "real/r-ceklis-reuse/thumb.webp", "real/r-checklist-bersih/thumb.webp", "real/r-cssd-simak/thumb.webp", "real/r-form-icra-tahunan/thumb.webp", "real/r-icra-konstruksi/thumb.webp", "real/r-icra-prn/thumb.webp", "real/r-icra-uraian/thumb.webp", "real/r-infeksi-virulen/thumb.webp", "real/r-integrasi-data/thumb.webp", "real/r-jenazah-simak/thumb.webp", "real/r-kriteria-reuse/thumb.webp", "real/r-laundry-simak/thumb.webp", "real/r-materi-pelatihan/thumb.webp", "real/r-panduan-bersih/thumb.webp", "real/r-pedoman-outbreak/thumb.webp", "real/r-pemantauan-bersih/thumb.webp", "real/r-pemantauan-reuse/thumb.webp", "real/r-program-icra/thumb.webp", "real/r-program-kerja/thumb.webp", "real/r-prosedur-bersih/thumb.webp", "real/r-risiko-infeksi/thumb.webp", "real/r-sop-outbreak/thumb.webp", "real/r-supervisi-bundle/thumb.webp", "real/r-supervisi-darah/thumb.webp", "real/r-supervisi-hcu/thumb.webp", "real/r-supervisi-jenazah/thumb.webp", "real/r-supervisi-steril/thumb.webp", "real/r-supervisi-tajam/thumb.webp", "real/r-supervisi-tekneg/thumb.webp", "real/r-surveilans-area/thumb.webp", "real/r-tambahan-bersih/thumb.webp", "real/r-triase-airborne/thumb.webp", "real/r-audit-kewaspadaan/p1.webp", "real/r-audit-kewaspadaan/p2.webp", "real/r-audit-kewaspadaan/p3.webp", "real/r-audit-kewaspadaan/p4.webp", "real/r-audit-permukaan/p1.webp", "real/r-audit-permukaan/p2.webp", "real/r-audit-permukaan/p3.webp", "real/r-audit-permukaan/p4.webp", "real/r-ceklis-outbreak/p1.webp", "real/r-ceklis-reuse/p1.webp", "real/r-checklist-bersih/p1.webp", "real/r-cssd-simak/p1.webp", "real/r-cssd-simak/p10.webp", "real/r-cssd-simak/p11.webp", "real/r-cssd-simak/p2.webp", "real/r-cssd-simak/p3.webp", "real/r-cssd-simak/p4.webp", "real/r-cssd-simak/p5.webp", "real/r-cssd-simak/p6.webp", "real/r-cssd-simak/p7.webp", "real/r-cssd-simak/p8.webp", "real/r-cssd-simak/p9.webp", "real/r-form-icra-tahunan/p1.webp", "real/r-form-icra-tahunan/p2.webp", "real/r-icra-konstruksi/p1.webp", "real/r-icra-konstruksi/p2.webp", "real/r-icra-konstruksi/p3.webp", "real/r-icra-konstruksi/p4.webp", "real/r-icra-konstruksi/p5.webp", "real/r-icra-konstruksi/p6.webp", "real/r-icra-konstruksi/p7.webp", "real/r-icra-prn/p1.webp", "real/r-icra-prn/p10.webp", "real/r-icra-prn/p11.webp", "real/r-icra-prn/p12.webp", "real/r-icra-prn/p13.webp", "real/r-icra-prn/p14.webp", "real/r-icra-prn/p15.webp", "real/r-icra-prn/p16.webp", "real/r-icra-prn/p17.webp", "real/r-icra-prn/p18.webp", "real/r-icra-prn/p19.webp", "real/r-icra-prn/p2.webp", "real/r-icra-prn/p20.webp", "real/r-icra-prn/p21.webp", "real/r-icra-prn/p22.webp", "real/r-icra-prn/p3.webp", "real/r-icra-prn/p4.webp", "real/r-icra-prn/p5.webp", "real/r-icra-prn/p6.webp", "real/r-icra-prn/p7.webp", "real/r-icra-prn/p8.webp", "real/r-icra-prn/p9.webp", "real/r-icra-uraian/p1.webp", "real/r-icra-uraian/p2.webp", "real/r-icra-uraian/p3.webp", "real/r-infeksi-virulen/p1.webp", "real/r-infeksi-virulen/p2.webp", "real/r-integrasi-data/p1.webp", "real/r-integrasi-data/p2.webp", "real/r-jenazah-simak/p1.webp", "real/r-jenazah-simak/p10.webp", "real/r-jenazah-simak/p11.webp", "real/r-jenazah-simak/p12.webp", "real/r-jenazah-simak/p2.webp", "real/r-jenazah-simak/p3.webp", "real/r-jenazah-simak/p4.webp", "real/r-jenazah-simak/p5.webp", "real/r-jenazah-simak/p6.webp", "real/r-jenazah-simak/p7.webp", "real/r-jenazah-simak/p8.webp", "real/r-jenazah-simak/p9.webp", "real/r-kriteria-reuse/p1.webp", "real/r-laundry-simak/p1.webp", "real/r-laundry-simak/p2.webp", "real/r-laundry-simak/p3.webp", "real/r-laundry-simak/p4.webp", "real/r-laundry-simak/p5.webp", "real/r-laundry-simak/p6.webp", "real/r-laundry-simak/p7.webp", "real/r-laundry-simak/p8.webp", "real/r-materi-pelatihan/p1.webp", "real/r-materi-pelatihan/p2.webp", "real/r-panduan-bersih/p1.webp", "real/r-panduan-bersih/p10.webp", "real/r-panduan-bersih/p11.webp", "real/r-panduan-bersih/p12.webp", "real/r-panduan-bersih/p13.webp", "real/r-panduan-bersih/p14.webp", "real/r-panduan-bersih/p15.webp", "real/r-panduan-bersih/p16.webp", "real/r-panduan-bersih/p2.webp", "real/r-panduan-bersih/p3.webp", "real/r-panduan-bersih/p4.webp", "real/r-panduan-bersih/p5.webp", "real/r-panduan-bersih/p6.webp", "real/r-panduan-bersih/p7.webp", "real/r-panduan-bersih/p8.webp", "real/r-panduan-bersih/p9.webp", "real/r-pedoman-outbreak/p1.webp", "real/r-pedoman-outbreak/p2.webp", "real/r-pemantauan-bersih/p1.webp", "real/r-pemantauan-reuse/p1.webp", "real/r-program-icra/p1.webp", "real/r-program-icra/p10.webp", "real/r-program-icra/p11.webp", "real/r-program-icra/p12.webp", "real/r-program-icra/p13.webp", "real/r-program-icra/p14.webp", "real/r-program-icra/p15.webp", "real/r-program-icra/p16.webp", "real/r-program-icra/p17.webp", "real/r-program-icra/p18.webp", "real/r-program-icra/p2.webp", "real/r-program-icra/p3.webp", "real/r-program-icra/p4.webp", "real/r-program-icra/p5.webp", "real/r-program-icra/p6.webp", "real/r-program-icra/p7.webp", "real/r-program-icra/p8.webp", "real/r-program-icra/p9.webp", "real/r-program-kerja/p1.webp", "real/r-program-kerja/p2.webp", "real/r-program-kerja/p3.webp", "real/r-program-kerja/p4.webp", "real/r-prosedur-bersih/p1.webp", "real/r-prosedur-bersih/p2.webp", "real/r-risiko-infeksi/p1.webp", "real/r-risiko-infeksi/p2.webp", "real/r-risiko-infeksi/p3.webp", "real/r-sop-outbreak/p1.webp", "real/r-sop-outbreak/p2.webp", "real/r-sop-outbreak/p3.webp", "real/r-supervisi-bundle/p1.webp", "real/r-supervisi-bundle/p2.webp", "real/r-supervisi-bundle/p3.webp", "real/r-supervisi-darah/p1.webp", "real/r-supervisi-hcu/p1.webp", "real/r-supervisi-hcu/p2.webp", "real/r-supervisi-hcu/p3.webp", "real/r-supervisi-jenazah/p1.webp", "real/r-supervisi-steril/p1.webp", "real/r-supervisi-steril/p2.webp", "real/r-supervisi-tajam/p1.webp", "real/r-supervisi-tajam/p2.webp", "real/r-supervisi-tekneg/p1.webp", "real/r-surveilans-area/p1.webp", "real/r-surveilans-area/p2.webp", "real/r-tambahan-bersih/p1.webp", "real/r-tambahan-bersih/p2.webp", "real/r-triase-airborne/p1.webp", "files/r-audit-kewaspadaan.docx", "files/r-audit-permukaan.docx", "files/r-ceklis-outbreak.docx", "files/r-ceklis-reuse.docx", "files/r-checklist-bersih.docx", "files/r-cssd-simak.docx", "files/r-form-icra-tahunan.docx", "files/r-icra-konstruksi.docx", "files/r-icra-prn.xlsx", "files/r-icra-uraian.docx", "files/r-infeksi-virulen.docx", "files/r-integrasi-data.docx", "files/r-jenazah-simak.docx", "files/r-kriteria-reuse.docx", "files/r-laundry-simak.docx", "files/r-materi-pelatihan.docx", "files/r-panduan-bersih.docx", "files/r-pedoman-outbreak.docx", "files/r-pemantauan-bersih.docx", "files/r-pemantauan-reuse.docx", "files/r-program-icra.docx", "files/r-program-kerja.docx", "files/r-prosedur-bersih.docx", "files/r-risiko-infeksi.docx", "files/r-sop-outbreak.docx", "files/r-supervisi-bundle.docx", "files/r-supervisi-darah.docx", "files/r-supervisi-hcu.docx", "files/r-supervisi-jenazah.docx", "files/r-supervisi-steril.docx", "files/r-supervisi-tajam.docx", "files/r-supervisi-tekneg.docx", "files/r-surveilans-area.docx", "files/r-tambahan-bersih.docx", "files/r-triase-airborne.docx", "files/semua-dokumen.zip"];
const LIBS = ["https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js","https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js","https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js","https://cdn.jsdelivr.net/npm/docx-preview@0.3.6/dist/docx-preview.min.js","https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"];
async function notify(msg) {
  const cs = await self.clients.matchAll({ includeUncontrolled: true, type: "window" });
  cs.forEach(c => c.postMessage(msg));
}
self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    let done = 0; const total = FILES.length;
    for (let i = 0; i < FILES.length; i += 12) {
      const chunk = FILES.slice(i, i + 12);
      await Promise.all(chunk.map(async f => {
        try { const r = await fetch(f, { cache: "reload" }); if (r.ok) await cache.put(f, r); } catch (err) {}
      }));
      done += chunk.length; notify({ type: "progress", done, total });
    }
    const lc = await caches.open("rumahhijo-libs");
    await Promise.all(LIBS.map(async u => { try { if (!(await lc.match(u))) { const r = await fetch(u, { mode: "no-cors" }); await lc.put(u, r); } } catch (err) {} }));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION && k.startsWith("rumahhijo-v")) await caches.delete(k);
    await self.clients.claim();
    notify({ type: "ready" });
  })());
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const hit = await cache.match(req, { ignoreSearch: true }) || (req.mode === "navigate" ? await cache.match("index.html") || await cache.match("./") : null);
      if (hit) return hit;
      try { const r = await fetch(req); if (r.ok) cache.put(req, r.clone()); return r; }
      catch (err) { return new Response("Offline dan file belum tersimpan.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }); }
    })());
  } else if (url.hostname === "cdnjs.cloudflare.com" || url.hostname === "cdn.jsdelivr.net") {
    e.respondWith((async () => {
      const lc = await caches.open("rumahhijo-libs");
      const hit = await lc.match(req.url);
      if (hit) return hit;
      try { const r = await fetch(req); lc.put(req.url, r.clone()); return r; } catch (err) { return Response.error(); }
    })());
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith((async () => {
      const cache = await caches.open("rumahhijo-fonts");
      const hit = await cache.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === "opaque") cache.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })());
  }
});

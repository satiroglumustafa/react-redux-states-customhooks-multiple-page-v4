// src/utils/utils.js
// url'de özel karakterler vs varsa bunları düzgün hale getirir

export const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // Özel karakterleri kaldır
      .replace(/\s+/g, '-')       // Boşlukları tireye çevir
      .replace(/--+/g, '-')       // Birden fazla tire varsa teke indir
      .trim();
  
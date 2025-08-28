# TASK2: Portfolio Website Development (Part2 - Pair Work)

## อธิบาย
### โครงสร้างโปรเจค
    portfolio-website/
    ├── css/
    │   └── style.css 
    ├── images/
    │   └── (รูปต่างๆ)
    ├── js/
    │   └── main.js
    ├── index.html
    └── README.md

### รายละเอียดแต่ละไฟล์
### `index.html`
* **เนื้อหา:** บรรจุข้อความ, หัวข้อ, ปุ่ม, และส่วนต่างๆ ของเว็บไซต์ เช่น:
    * ส่วนหัว (Hero section) พร้อม Typing Animation.
    * ส่วนโครงการ (Projects section) พร้อมปุ่ม Filter.
    * ส่วนแนะนำบุคคล (Who We Are section) ที่เพิ่งเพิ่มเข้ามา.
    * ปุ่มสลับธีม (Dark/Light Mode Toggle).
    * แถบแสดงความคืบหน้าการเลื่อนหน้าจอ (Scroll Progress Indicator).
    * ปุ่มกลับสู่ด้านบน (Back to Top Button).
* **External Resources:** นำเข้าไลบรารีภายนอก เช่น Font Awesome (สำหรับไอคอน) และ Google Fonts (สำหรับฟอนต์).

### `style.css`
* **การตกแต่ง (Styling):** ควบคุมสี, ฟอนต์, ขนาด, ระยะห่าง, เงา, และการจัดวางของทุกองค์ประกอบบนหน้าเว็บ.
* **การปรับตามธีม (Theming):** กำหนดตัวแปร CSS (`--bg-color`, `--text-color` ฯลฯ) สำหรับ Light และ Dark Mode และจัดการการเปลี่ยนธีม.
* **Animation & Transitions:** สร้างเอฟเฟกต์การเคลื่อนไหวที่ราบรื่นและสวยงาม (เช่น การเปลี่ยนธีม, การ Hover ปุ่ม, Typing Animation, Loader).

### `main.js`
* **Dark/Light Mode Logic:** จัดการการสลับธีมเมื่อผู้ใช้คลิกไอคอน (บันทึกค่าใน Local Storage เพื่อจดจำการตั้งค่าของผู้ใช้).
* **Loading Animation:** ควบคุมการแสดงผลและซ่อน Loading Spinner เมื่อหน้าเว็บโหลดเสร็จ.
* **Scroll Progress Calculation:** คำนวณความคืบหน้าการเลื่อนหน้าจอและอัปเดตแถบ Progress Bar.
* **Project Filtering:** จัดการการแสดงผลและซ่อน Project Cards ตามหมวดหมู่ที่ผู้ใช้เลือก.
* **Typing Animation:** สร้างเอฟเฟกต์การพิมพ์ข้อความอัตโนมัติในส่วน Hero.
* **Back to Top Button Logic:** ควบคุมการแสดงผลของปุ่ม "Back to Top" และการเลื่อนหน้าจออย่างราบรื่นเมื่อคลิก.
* **Event Handling:** จัดการการคลิกและการเลื่อนหน้าจอของผู้ใช้เพื่อเรียกใช้ฟังก์ชันต่างๆ.

## ดูผลลัพธ์
### [เปิดหน้าเว็บ](https://glittery-entremet-50e1db.netlify.app/)

#
## [เอกสาร](https://docs.google.com/document/d/1CkBsPqXEGCGwgipGnpByEeNlSO5KxhsWF2_sGRFt8fw/edit?usp=sharing)

# 🛰️ Web_Track — Cyber Tracker

Web_Track is a **real-time web-based tracking demonstration project** that shows how **camera access, live feed, screenshots, and geolocation** can be collected from a browser **with user permission**.

It includes:
- An **Admin Dashboard**
- A **Target Landing Flow**
- **Live camera feed**
- **Screenshot capture**
- **Location tracking**
- Session-based tracking links

🌐 Live Demo:  
https://web-track.onrender.com/

---

## 🔥 Key Features

### 🧑‍💻 Admin Panel
- Create tracking sessions
- Generate **unique tracking links**
- View target status
- See live camera feed
- Capture screenshots
- Track location in real time

### 🎯 Target Flow
- Friendly greeting page
- Festival-based greeting (e.g., Diwali)
- Name-based personalization
- Camera permission request
- Location permission request

### 📷 Camera Tracking
- Live webcam stream
- Screenshot capture from admin panel

### 🌍 Location Tracking
- Latitude & Longitude
- Google Maps link support

---

## 🖥️ Screens & Flow
<img width="1231" height="807" alt="image" src="https://github.com/user-attachments/assets/a5ef34e5-77e1-43c4-b7e7-83b8ea3c611f" />
<img width="1244" height="456" alt="image" src="https://github.com/user-attachments/assets/b8721023-e06b-472c-be80-efd71f9a88bb" />
<img width="1101" height="561" alt="image" src="https://github.com/user-attachments/assets/b384a182-d01d-4d96-9a18-5e0eca90f51b" />
<img width="1086" height="821" alt="image" src="https://github.com/user-attachments/assets/705fdc31-d0ef-42c6-a560-32b47904df3e" />

---

## 🚀 How It Works

### Admin Side
1. Open admin panel
2. Enter festival name (e.g., `diwali`)
3. Click **Generate Tracking Link**
4. Send link to target
5. Monitor live data

Example generated link: https://web-track.onrender.com/track?session=fugnpnhn5eq&festival=diwali


---

### Target Side
1. Opens link
2. Enters name
3. Sees greeting page
4. Clicks continue
5. Browser asks for:
   - Camera access
   - Location access
6. Data is streamed to admin

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Web APIs**:
  - MediaDevices API (Camera)
  - Geolocation API
- **Hosting**: Render

---

## 📁 Project Structure

```bash
Web_Track/
│
├── public/
│ ├── admin.html # Admin dashboard
│ ├── track.html # Target page
│ ├── css/
│ ├── js/
│
├── server.js # Backend server
├── package.json
└── README.md
```
---

## 🔐 Permissions & Security

- Camera & location **require explicit browser permission**
- Works on:
  - HTTPS websites
  - localhost
- No permission = no data access

⚠️ Browsers fully control access.

---

## ❗ Important Disclaimer

> ⚠️ **EDUCATIONAL USE ONLY**

This project is created for:
- Learning web APIs
- Cybersecurity demonstrations
- Ethical hacking awareness
- OSINT & social engineering education

❌ Do NOT use this project for:
- Illegal spying
- Harassment
- Unauthorized surveillance
- Privacy violation

The author is **not responsible** for misuse.

---

## 🧪 Use Cases

- Cybersecurity learning
- College projects
- Ethical hacking demos
- Awareness training
- Web API practice

---

## 📜 License

MIT License  
Free to use, modify, and learn from.

---

## 👤 Author

**Srijan Manna**  
GitHub: https://github.com/sr17an  

---

⭐ If you like this project, please **star the repository**!


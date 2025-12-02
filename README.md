Hashtag Manager Pro

Read in [日本語](README_JA.md) | [한국어](README_KO.md) | [简体中文](README_ZH_CN.md) | [繁體中文](README_ZH_TW.md)

Hashtag Manager Pro is a browser extension designed to make managing and using Twitter (X) hashtags simpler. It allows you to organize tags into categories, create drag-and-drop presets, and use a unique "Priority Ladder" to ensure your most important tags always fit within the character limit.

![Main UI](images/hashtag_manager_pro_UI.png)

📖 Why this tool?

This tool was created out of a personal need while getting into the VRChat community. When posting pictures, I wanted to add the proper hashtags, but having to constantly look them up or keep them in a text file was a pain. I decided to take matters into my own hands.

The goal is to provide a tool to automate something tedious, making it easier to share content with the community.

✨ Features

📂 Dynamic Categories: Organize hashtags into custom tabs (e.g., "Avatars", "Stores", "General").

🖱️ Drag & Drop UI: Move hashtags between categories or drag them directly into Twitter/X text fields.

🪜 Priority Sorting: Define a custom sort order. When copying multiple tags, high-priority ones are added first so they aren't cut off by the character limit.

📦 Smart Presets: Save frequently used hashtag combinations (e.g., for a specific avatar like "Megu") and unpack them with one click.

🌍 Multi-language Support: English, Japanese (日本語), Korean (한국어), Simplified Chinese (简体中文), and Traditional Chinese (繁體中文).

🎨 Customization: Auto, Light, and Dark themes with a glassmorphism aesthetic.

🔒 Privacy Focused: All data is stored locally in your browser via the Chrome Storage API.

🤖 Development Note

"I offloaded all the work to an AI."

I (the author) designed the features, guided the development, and tested everything, but I do not have coding experience myself. This extension was built entirely through collaboration with Google's Gemini.

Because of this, the code might be a bit basic to seasoned eyes. It works perfectly for my needs, but if you are a developer and see ways to improve it: "I can do it better!" is exactly the reaction I'm hoping for. Please fork it and make it amazing!

📥 Installation

Note: Since this extension is not on the Chrome Web Store, you will need to install it manually.

Download: Go to the [suspicious link removed] page and download the Source code (zip) or the release .zip file.

Unzip: Extract the files to a folder on your computer.

Open Extensions:

Chrome/Brave: Go to chrome://extensions

Edge: Go to edge://extensions

Enable Developer Mode: Toggle the switch in the top-right corner.

Load Unpacked: Click the "Load unpacked" button and select the folder you just extracted.

Pin it: Click the puzzle piece icon in your browser toolbar and pin Hashtag Manager Pro.

🚀 How to Use

Basic Usage

Open: Go to X.com (Twitter) and click the extension icon.

Create Category: Click the + icon next to the tabs list to create a new category (Tab).

Add Tags: Click the + Add chip at the end of the tag list. You can add multiple tags at once by separating them with spaces.

Copy: Simply click any tag chip to copy it to your clipboard.

Multi-Select Mode

Switch to Select Mode using the checkmark icon. You can select hashtags across all distinct categories.

Copy All: Click the floating "Copy" bar at the bottom to copy all selected tags at once.

Character Counter: The counter at the bottom shows how much space your tags consume.

Note: Characters from languages like Japanese, Chinese, or Korean count as 2 slots.

Priority Sorting ("The Ladder")

Open the Priority Drawer (left sidebar) to define which tags are most important.

Add: Drag tags or full categories into the ladder.

Sort: Drag items up or down to change their priority.

Logic: If you add a hashtag AND its category to the ladder, whichever is higher takes precedence.

Toggle: You can turn the sorting logic on/off with the toggle switch in the drawer.

Presets

Open the Presets Drawer to manage bundles.

Create: Click the + button. You can type tags or drag existing chips into the creation box.

Use: Click a preset to copy it, or drag it into any text field to paste immediately.

🛠️ Tech Stack

Core: Vanilla JavaScript (No frameworks)

Manifest: Chrome Extension Manifest V3

Styling: CSS with Glassmorphism

Storage: chrome.storage.local for persistence

🤝 Contributing

Project Status: I am not actively maintaining this beyond fixing critical bugs. I created this to solve my own need and to share it with others.

That said, this is Open Source (MIT). If you are a developer, please fork it!

Refactor the code

Add new features

Fix bugs

Take the concept in a totally new direction

🙏 Acknowledgments

Google's Gemini: For writing the code.

X's Management: For removing basic features and inspiring me to build my own tools.

VRChat Community: For the inspiration.

📄 License

This project is licensed under the MIT License.

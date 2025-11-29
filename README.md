# hashtag_manager_pro
A browser extension that makes managing and using Twitter (currently X) hashtags simpler.

**Hashtag Manager Pro**
Just as it saus on the tin, this is a browser extension for Chromium based browsers (I didn't actually test it on Firefox at the time of writing this Readme) that aims make using and organizing hashtags simpler.

This tool was created due to my own need to do so, while getting into the VRChat community. When posting pictures, I want to add the proper hashtags, but having to constantly look them up or keep them on a text file was kind of a pain, so I took matters into my own hands.

... And by that, I mean that I offloaded all the work to an AI, as I don't have coding experience. Because of that, the tool is a bit basic and maybe crude, as it was made to meet my own need, with the idea to share it coming after all the features were reaching completion, both to provide a tool to do something I find tedious to the community, making it easier to share, and so that, hopefully, one day, someone who actually knows what they are doing sees this tool and this code, and says "I can do it better!".

✨ **Features**

**Dynamic Categories**: Organize hashtags into custom tabs

**Multiple Modes**:

View Mode: Click any hashtag to instantly copy it

Select Mode: Build a selection of multiple hashtags and copy them all at once

Edit Mode: Modify or delete tags and categories on the fly


**Priority Sorting**: Use the Priority Ladder to define custom sort order for your hashtags

**Presets**: Save frequently-used hashtag combinations for one-click copying

**History**: Track your last 10 copied hashtag sets

**Drag & Drop**: Move hashtags between categories or drag them directly into Twitter

**Theme Options**: Auto, Light, and Dark modes

**Import/Export**: Backup your entire hashtag library, categories and settings as JSON file

🚀 **Installation**
Since this extension isn't published on the Chrome Web Store, you'll need to install it manually:

Download or clone this repository

Open Chrome/Edge/Brave/your Chromium based browser of choice and go to the Manage Extensions menu (or type, on any of those browsers, chrome://extensions/ into the URL field)

Enable "Developer mode" (toggle in the top right)

Click "Load unpacked"

Select the folder containing the extension files


Note: I'm not planning to publish this to the Chrome Web Store. This is open source for anyone to use, modify, or republish as they see fit (under the MIT license).

📖 **How to Use**

**Basic Usage**

Go to X.com (or twitter.com).

Click the extension icon to open the popup. By default, you should have only the "All" tab. This is the default tab that holds all the hashtags you add. You can disable it on the settings menu later (if you disable it before creating another Category, the UI will still default to show you the All tab, regardless).

To create a new Category, simply click the "+" icon next to the All tab, give it a name, and save it.

To add an hashtag, click the "Add" button under the Categories list.

In here, you can give it a name, and add hashtags (Yes, plural. Just make sure to separate them with a space). When you are done, simply hit save.

In View Mode, click any hashtag chip to copy it to your clipboard

Use the mode buttons at the top to switch between View, Multi Select and Edit modes.

**Working with Multiple Hashtags**

Switch to Multi Select Mode using this Icon.

You can now Select hashtags across all your categories. Selected hashtags are highlighted.

When you are ready, click the Copy All button at the bottom, and all the tags will be copied at once! Also, notice the character counter at the bottom, which tells you how many of your precious 280 characters the tags you selected will take. Also, do note that characters from languages like Japanese, Chinese or Korean will take 2 character slots instead of one.

Priority Sorting

To open the Priority Ladder drawer, click this button, which will open the drawer to the left of the main UI.

You may now click or drag hashtags to add them to the ladder, or drag full categories into it. If you add a hashtag AND the category it is part of (excluding the All tab, which cannot be added to the ladder), whichever takes priority is whichever is first on the ladder.

In this example, even though [] is part of the Others Category, since it comes first, it will have higher priority than other tags on the same category.

After they are on the ladder, you may drag the items to reorder them.

Clicking the X button on an item will remove it from the ladder.

Finally, you can toggle whether the sorting order is being used or not with the button on the top of the drawer.

Creating Presets

To create a preset, open the Presets menu, which, just like the Priority drawer, should open to the side of the main panel. Here, you can create a new Preset, edit the presets you have, and even drag and drop them.

First, click this button to add a new preset.

Then you get the option to name it, and add hashtags to it.

As I created it to make it easier to post Ohatweets, one of my basic usages would be to create a preset for a specific avatar.

You can add the hashtags both by writing them into the field, or dragging them into the hashtag field. Both work just fine!

In my case, I set up the preset for one of my characters, Megu, which is a customized Manuka. Also, if you have a Priority Ladder set up and active, the order you add the tags doesn't matter, as they will always be copied in the proper order according to the Priority Ladder. When you are done, you can click Save, and that's it, you have created your preset!

Now, just like tags, you can click it to copy all the hashtags, or you can actually drag it into any text input field, and it'll paste the hashtags automatically! Also, as you can see, even though the order was [], due to the priorities I set up, the tags got reordered to match it automatically!

🛠️ Tech Stack

Vanilla JavaScript (no frameworks)
Chrome Extension Manifest V3
CSS with Glassmorphism styling
Chrome Storage API for data persistence

📂 Project Structure
hashtag_manager_pro/
├── manifest.json       # Extension manifest
├── content.js          # Main logic and UI
├── styles.css          # Glassmorphism styling
├── icon16.png          # Extension icon (16x16)
└── icon128.png         # Extension icon (128x128)

💭 Development Note
This extension was developed with AI assistance. While I maintain the repository and accept legal ownership of the code, the implementation was created through collaboration with AI tools. I don't have coding experience myself—I designed the features, guided the development, and tested everything, but I didn't write the code.
As stated above, my reason to make this project open source is, in part, specifically because there are no freeware or open source solutions I could find to fix this specific need I had, but I have no coding experience. So, even though I was able to create it by prompting an AI and guiding the dev process, this is nothing compared to what a proper developer could create, but it may be enough to get the ball rolling. So, to any developers that look at the code on this repository, do feel free to take this functional, but average at best extension, and create something truly amazing!

🤝 Contributing
Project Status: I'm not actively maintaining this beyond fixing critical bugs. I created this to solve my own need and to share it with others who might find it useful.
That said: If you're a developer and see potential here, please fork it and make it better! That's exactly why I'm making this open source. Feel free to:

Fork and improve it
Submit bug fixes (though I can't guarantee quick responses)
Build something better inspired by this
Take the concept in a completely different direction

I know this code probably isn't perfect, but it works. If you can make it great, please do.
📝 License
MIT License - see LICENSE file for details.
🙏 Acknowledgments
- Google's Gemini, which was what I used to generate the code for this extension.
- X's current management, for not having even a barebones way to manage hashtags (or, at least, not one that isn't behind X Pro's paywall) and getting me to decide to be the change I wanted to see.

Note: This extension is not affiliated with Twitter/X.

Features that weren't implemented to prevent the project from growing too complex:
- Custom themes
- Keyboard shortcuts to navigate the UI, along with keybind customization

# hashtag_manager_pro
A browser extension that makes managing and using Twitter (currently X) hashtags simpler.

**Hashtag Manager Pro**
Just as it says on the tin, this is a browser extension for Chromium based browsers (I didn't actually test it on Firefox at the time of writing this Readme) that aims make using and organizing hashtags simpler.

This tool was created due to my own need to do so, while getting into the VRChat community. When posting pictures, I want to add the proper hashtags, but having to constantly look them up or keep them on a text file was kind of a pain, so I took matters into my own hands.

... And by that, I mean that I offloaded all the work to an AI, as I don't have coding experience. Because of that, the tool is a bit basic and maybe crude, as it was made to meet my own need, with the idea to share it coming after all the features were reaching completion, both to provide a tool to do something I find tedious to the community, making it easier to share, and so that, hopefully, one day, someone who actually knows what they are doing sees this tool and this code, and says "I can do it better!".

Oh, and the reason it's called "Pro"? That's just because it sounds fancier.

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


<img width="1519" height="768" alt="2025-11-29_21-45" src="https://github.com/user-attachments/assets/9db4f50c-ce02-4d30-a99d-ea767db6eff9" />

Download or clone this repository, and extract the .zip file somewhere into your computer that the folder can stay in permanently


<img width="1284" height="448" alt="2025-11-29_21-46" src="https://github.com/user-attachments/assets/d78f7bb6-57ff-4eb1-99c5-47babffc87e3" />

Open Chrome/Edge/Brave/your Chromium based browser of choice and go to the Manage Extensions menu (or type, on any of those browsers, chrome://extensions/ into the URL field)


<img width="1919" height="520" alt="image" src="https://github.com/user-attachments/assets/c397b630-ad7a-468a-afda-ac5f67b78bf2" />

Enable "Developer mode" (toggle in the top right)


<img width="1912" height="535" alt="image" src="https://github.com/user-attachments/assets/a5f74010-825f-4ea1-8dc3-2960ab6c543b" />

Click "Load unpacked"


<img width="949" height="530" alt="image" src="https://github.com/user-attachments/assets/289a1d6f-6a4c-414d-8b9e-f2016955034b" />

Select the folder containing the extension files (in my case, as this was done with the dev version, it was called hashtag_manager_extension v2)


Note: I'm not planning to publish this to the Chrome Web Store. This is open source for anyone to use, modify, or republish as they see fit (under the MIT license).

📖 **How to Use**

**Basic Usage**


<img width="1077" height="374" alt="image" src="https://github.com/user-attachments/assets/3c7fbf68-27f4-4593-9363-92474c62b1c1" />

Go to X.com (or twitter.com). Click the extension icon to open the popup window. 


<img width="363" height="554" alt="image" src="https://github.com/user-attachments/assets/33a1d91e-6ed5-43d6-baef-f58f075ceb81" />

You should have only the "All" tab. This is the default tab that holds all the hashtags you add. 

> [!TIP]
> You can disable it on the settings menu later (if you disable it before creating another Category, the UI will still default to show you the All tab, regardless)


<img width="356" height="546" alt="image" src="https://github.com/user-attachments/assets/57fa893c-d45e-4d56-a07e-b39ea365144b" /> <img width="364" height="541" alt="image" src="https://github.com/user-attachments/assets/a5ff31c2-0ff1-44e9-87a3-f3f96a5393ab" />

To create a new Category, simply click the "+" icon next to the All tab, give it a name, and hit "Create".


<img width="363" height="551" alt="image" src="https://github.com/user-attachments/assets/5856c829-5504-4c2d-84b7-f3be618d9e1f" /> 

To add an hashtag, click the "Add" button under the Categories list.


<img width="362" height="543" alt="image" src="https://github.com/user-attachments/assets/776328ed-1246-434f-a989-ed8fef9224dd" />

In here, you can give it a name, and add hashtags (Yes, plural. Just make sure to separate them with a space). When you are done, simply hit Add.

> [!NOTE]
> An hashtag created under the All tab is going to be only be shown on the All tab. To move hashtags between tabs, simply drag it to the destination tab. The All tab, as it already has all the hashtags created, cannot receive tabs like this.

In View Mode, click any hashtag to copy it to your clipboard

Use the mode buttons at the top to toggle Multi Select Mode or Edit Mode. To return to View Mode, simply click the respective button once more.


**Working with Multiple Hashtags**


<img width="428" height="483" alt="image" src="https://github.com/user-attachments/assets/85b570af-152c-4852-89bf-0b7b514835e3" />

Switch to Multi Select Mode using this Icon.


<img width="422" height="476" alt="{4AF624A4-FFA5-44FD-ACB5-E85A9B30769C}" src="https://github.com/user-attachments/assets/04e6137a-fca6-412c-96d3-4598cfc7bb9b" /> <img width="422" height="470" alt="image" src="https://github.com/user-attachments/assets/6fc61a02-7680-4055-80e5-98d6ab4d03a1" /> <img width="432" height="480" alt="image" src="https://github.com/user-attachments/assets/36ca0020-d114-4c53-979f-80fa10edad23" />

You can now Select hashtags across all your categories. Selected hashtags are highlighted.


<img width="421" height="479" alt="image" src="https://github.com/user-attachments/assets/1a953cc4-bb8e-4770-86a0-1512ea337d27" /> <img width="1104" height="424" alt="image" src="https://github.com/user-attachments/assets/6911adc5-d6d4-40df-a089-2e51dbb32a0d" />

When you are ready, click the Copy All button at the bottom, and all the tags will be copied at once! 

> [!TIP]
>Also, are you worried about whether your selection will take too many of your precious 280 characters? Well, fret not! Notice the handy character counter on the bottom of the Multi Select Mode UI. It even turns red if you (somehow) go over the limit! Do note, however, that characters from languages like Japanese, Chinese or Korean will take 2 character slots instead of one. Oh, and the reason why this screenshot's UI looks different? While taking the images for the readme, I found that the Copy button was bugged, and took that as an opportunity to make the counter more visible.



**Priority Sorting**



> [!NOTE]
> By default, the hashtags are posted in the order they are clicked, if using Multi Select Mode, or in the order they were added to the Preset, if using a Preset


<img width="429" height="488" alt="image" src="https://github.com/user-attachments/assets/e82314db-5304-411b-92ab-ad213f962f1a" />

To open the Priority Ladder drawer, click this button, which will open the drawer to the left of the main UI.


<img width="789" height="480" alt="image" src="https://github.com/user-attachments/assets/7de1f255-ae87-48a7-a1d8-58d2977ac846" /> <img width="790" height="487" alt="{036578A7-E107-4403-9BD8-7A4044DF800E}" src="https://github.com/user-attachments/assets/28effce5-9c6d-4157-8df5-2272389a0a7d" />

After you toggle the priority list to On, you may now click or drag hashtags to add them to the ladder, or drag full categories into it. 

> [!NOTE]
> If you add a hashtag AND the category it is part of (excluding the All tab, which cannot be added to the ladder), whichever takes priority is whichever is first on the ladder. In this example, even though [] is part of the Others Category, since it comes first, it will have higher priority than other tags on the same category.

After they are on the ladder, you may drag the items to reorder them.

Clicking the X button on an item will remove it from the ladder.

Creating Presets


<img width="425" height="481" alt="image" src="https://github.com/user-attachments/assets/4591bdb2-163b-470b-a90c-a609e203a528" /> 

To create a preset, open the Presets menu, which, just like the Priority drawer, should open to the side of the main panel. Here, you can create a new Preset, edit the presets you have, and even drag and drop them.


<img width="788" height="484" alt="image" src="https://github.com/user-attachments/assets/4c3ea512-620b-427e-b1e9-233db71cdc5d" />

First, click this button to add a new preset.


<img width="792" height="474" alt="image" src="https://github.com/user-attachments/assets/6fb8a38e-ec59-49f3-9595-f6c42084f21a" /> <img width="785" height="476" alt="image" src="https://github.com/user-attachments/assets/2af14b9d-e9e2-4936-b227-a4ab18aedff4" />

Then you get the option to name it, and add hashtags to it. When you are done, just hit the Save button. You may also edit it by pressing the pencil icon on the Preset, and you can see the character count it will use directly on it, as well. And, just like with Multi Select, if you go over the limit, it'll turn red.

As I created it to make it easier to post Ohatweets, one of my basic usages would be to create a preset for a specific avatar. Though, for the purposes of demonstration, I added a lot of different tags to it.

> [!TIP]
> You can add the hashtags both by writing them into the field, or dragging them into the hashtag field. Both work just fine. And, 


<img width="1112" height="269" alt="image" src="https://github.com/user-attachments/assets/8099b57a-a583-4bac-95a1-e5babac40865" />

Now, just like tags, you can click it to copy all the hashtags, or you can actually drag it into any text input field, and it'll paste the hashtags automatically.

> [!NOTE]
> if you have a Priority Ladder set up and active, the order you add the tags doesn't matter, as they will always be copied in the proper order according to the Priority Ladder.

🛠️ **Tech Stack**

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

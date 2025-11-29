// ==========================================
// HASHTAG MANAGER V1.1.2 - PRO (FINAL POLISH)
// ==========================================

// --- 1. LOCALIZATION DATABASE ---
const TRANSLATIONS = {
  en: {
    app_title: "Hashtag Manager",
    header_priority: "Priority Ladder",
    header_history: "Recent History",
    header_presets: "Presets",
    tt_history: "History",
    tt_presets: "Presets",
    tt_prio: "Priority Ladder",
    tt_sort: "Toggle Visual Sort",
    tt_select: "Multi-Select Mode",
    tt_edit: "Edit Items & Tabs",
    tt_add: "Add",
    tt_settings: "Settings",
    tt_close: "Close",
    instr_prio_off: "Sorting is OFF.",
    instr_prio_on: "Sorting is ON.",
    instr_prio_sub: "Drag to reorder.<br>Click tags/tabs to add.",
    instr_history: "Your last 10 copies.",
    instr_presets: "Click to unpack into selection.",
    btn_save: "Save",
    btn_cancel: "Cancel",
    btn_delete: "Delete",
    btn_create: "Create",
    btn_add: "Add",
    btn_copy: "Copy",
    btn_export: "Export",
    btn_import: "Import",
    btn_clear_data: "Clear All Data",
    ph_search: "Search...",
    ph_name: "Name",
    ph_tags: "#Hashtags...",
    ph_tab_name: "Tab Name",
    ph_preset_tags: "#Tags... (Drag chips here)",
    set_theme: "Theme",
    set_theme_auto: "Auto",
    set_theme_light: "Light",
    set_theme_dark: "Dark",
    set_interface: "Interface",
    set_show_all: "Show 'All Hashtags' Tab",
    set_language: "Language",
    set_backup: "Backup & Restore",
    notif_copied: "Copied: ",
    notif_added: "Added!",
    notif_updated: "Updated!",
    notif_deleted: "Deleted",
    notif_moved: "Moved",
    notif_prio_added: "Added to Priority",
    notif_prio_exists: "Already in Priority",
    notif_unpacked: "Unpacked",
    ui_all_tab: "❖ All",
    ui_new_tag: "New Tag",
    ui_new_tab: "New Tab",
    ui_add_chip: "+ Add",
    ui_edit_tab: "Edit Tab",
    ui_list_empty: "List empty.",
    ui_history_empty: "No history yet.",
    ui_selected: "selected",
    confirm_nuke: "This will erase EVERYTHING in the extension. Do you want to continue?",
    confirm_delete: "Delete?"
  },
  ja: {
    app_title: "ハッシュタグマネージャー",
    header_priority: "優先順位ラダー",
    header_history: "最近の履歴",
    header_presets: "プリセット",
    tt_history: "履歴",
    tt_presets: "プリセット",
    tt_prio: "優先順位",
    tt_sort: "並び替え切替",
    tt_select: "複数選択モード",
    tt_edit: "編集モード",
    tt_add: "追加",
    tt_settings: "設定",
    tt_close: "閉じる",
    instr_prio_off: "優先順位: オフ",
    instr_prio_on: "優先順位: オン",
    instr_prio_sub: "ドラッグで並べ替え。<br>クリックで追加。",
    instr_history: "最新の10件",
    instr_presets: "クリックで選択に追加。",
    btn_save: "保存",
    btn_cancel: "キャンセル",
    btn_delete: "削除",
    btn_create: "作成",
    btn_add: "追加",
    btn_copy: "コピー",
    btn_export: "エクスポート",
    btn_import: "インポート",
    btn_clear_data: "全データ削除",
    ph_search: "検索...",
    ph_name: "名前",
    ph_tags: "#タグ...",
    ph_tab_name: "タブ名",
    ph_preset_tags: "#タグ... (ドラッグ可能)",
    set_theme: "テーマ",
    set_theme_auto: "自動",
    set_theme_light: "ライト",
    set_theme_dark: "ダーク",
    set_interface: "インターフェース",
    set_show_all: "「すべて」タブを表示",
    set_language: "言語 (Language)",
    set_backup: "バックアップと復元",
    notif_copied: "コピー完了: ",
    notif_added: "追加しました！",
    notif_updated: "更新しました！",
    notif_deleted: "削除しました",
    notif_moved: "移動しました",
    notif_prio_added: "優先リストに追加",
    notif_prio_exists: "既にリストにあります",
    notif_unpacked: "展開完了",
    ui_all_tab: "❖ すべて",
    ui_new_tag: "新しいタグ",
    ui_new_tab: "新しいタブ",
    ui_add_chip: "+ 追加",
    ui_edit_tab: "タブ編集",
    ui_list_empty: "リストは空です。",
    ui_history_empty: "履歴なし。",
    ui_selected: "選択中",
    confirm_nuke: "拡張機能内のすべてのデータが消去されます。続行しますか？",
    confirm_delete: "削除しますか？"
  },
  ko: {
    app_title: "해시태그 매니저",
    header_priority: "우선순위",
    header_history: "최근 기록",
    header_presets: "프리셋",
    tt_history: "기록",
    tt_presets: "프리셋",
    tt_prio: "우선순위",
    tt_sort: "정렬 전환",
    tt_select: "다중 선택",
    tt_edit: "편집",
    tt_add: "추가",
    tt_settings: "설정",
    tt_close: "닫기",
    instr_prio_off: "정렬 꺼짐",
    instr_prio_on: "정렬 켜짐",
    instr_prio_sub: "드래그하여 정렬.<br>클릭하여 추가.",
    instr_history: "최근 10개",
    instr_presets: "클릭하여 선택 항목에 추가.",
    btn_save: "저장",
    btn_cancel: "취소",
    btn_delete: "삭제",
    btn_create: "생성",
    btn_add: "추가",
    btn_copy: "복사",
    btn_export: "내보내기",
    btn_import: "가져오기",
    btn_clear_data: "데이터 초기화",
    ph_search: "검색...",
    ph_name: "이름",
    ph_tags: "#태그...",
    ph_tab_name: "탭 이름",
    ph_preset_tags: "#태그... (드래그 가능)",
    set_theme: "테마",
    set_theme_auto: "자동",
    set_theme_light: "라이트",
    set_theme_dark: "다크",
    set_interface: "인터페이스",
    set_show_all: "'전체' 탭 표시",
    set_language: "언어 (Language)",
    set_backup: "백업 및 복원",
    notif_copied: "복사됨: ",
    notif_added: "추가됨!",
    notif_updated: "업데이트됨!",
    notif_deleted: "삭제됨",
    notif_moved: "이동됨",
    notif_prio_added: "우선순위에 추가됨",
    notif_prio_exists: "이미 존재함",
    notif_unpacked: "적용됨",
    ui_all_tab: "❖ 전체",
    ui_new_tag: "새 태그",
    ui_new_tab: "새 탭",
    ui_add_chip: "+ 추가",
    ui_edit_tab: "탭 편집",
    ui_list_empty: "목록 없음.",
    ui_history_empty: "기록 없음.",
    ui_selected: "선택됨",
    confirm_nuke: "확장 프로그램의 모든 데이터가 삭제됩니다. 계속하시겠습니까?",
    confirm_delete: "삭제하시겠습니까?"
  },
  zh_CN: {
    app_title: "标签管理器",
    header_priority: "优先梯队",
    header_history: "最近历史",
    header_presets: "预设",
    tt_history: "历史",
    tt_presets: "预设",
    tt_prio: "优先梯队",
    tt_sort: "切换排序",
    tt_select: "多选模式",
    tt_edit: "编辑",
    tt_add: "添加",
    tt_settings: "设置",
    tt_close: "关闭",
    instr_prio_off: "排序已关闭",
    instr_prio_on: "排序已开启",
    instr_prio_sub: "拖动排序。<br>点击添加。",
    instr_history: "最近10条",
    instr_presets: "点击解包到选择中。",
    btn_save: "保存",
    btn_cancel: "取消",
    btn_delete: "删除",
    btn_create: "创建",
    btn_add: "添加",
    btn_copy: "复制",
    btn_export: "导出",
    btn_import: "导入",
    btn_clear_data: "清除所有数据",
    ph_search: "搜索...",
    ph_name: "名称",
    ph_tags: "#标签...",
    ph_tab_name: "标签页名称",
    ph_preset_tags: "#标签... (可拖入)",
    set_theme: "主题",
    set_theme_auto: "自动",
    set_theme_light: "亮色",
    set_theme_dark: "暗色",
    set_interface: "界面",
    set_show_all: "显示“全部”标签页",
    set_language: "语言 (Language)",
    set_backup: "备份与恢复",
    notif_copied: "已复制: ",
    notif_added: "已添加!",
    notif_updated: "已更新!",
    notif_deleted: "已删除",
    notif_moved: "已移动",
    notif_prio_added: "已加入优先列",
    notif_prio_exists: "已在优先列中",
    notif_unpacked: "已解包",
    ui_all_tab: "❖ 全部",
    ui_new_tag: "新标签",
    ui_new_tab: "新标签页",
    ui_add_chip: "+ 添加",
    ui_edit_tab: "编辑标签页",
    ui_list_empty: "列表为空。",
    ui_history_empty: "暂无历史。",
    ui_selected: "已选",
    confirm_nuke: "这将清除扩展中的所有数据。确定要继续吗？",
    confirm_delete: "确定删除？"
  },
  zh_TW: {
    app_title: "標籤管理器",
    header_priority: "優先梯隊",
    header_history: "最近歷史",
    header_presets: "預設",
    tt_history: "歷史",
    tt_presets: "預設",
    tt_prio: "優先梯隊",
    tt_sort: "切換排序",
    tt_select: "多選模式",
    tt_edit: "編輯",
    tt_add: "新增",
    tt_settings: "設定",
    tt_close: "關閉",
    instr_prio_off: "排序已關閉",
    instr_prio_on: "排序已開啟",
    instr_prio_sub: "拖曳排序。<br>點擊新增。",
    instr_history: "最近10筆",
    instr_presets: "點擊解包到選擇中。",
    btn_save: "儲存",
    btn_cancel: "取消",
    btn_delete: "刪除",
    btn_create: "建立",
    btn_add: "新增",
    btn_copy: "複製",
    btn_export: "匯出",
    btn_import: "匯入",
    btn_clear_data: "清除所有資料",
    ph_search: "搜尋...",
    ph_name: "名稱",
    ph_tags: "#標籤...",
    ph_tab_name: "標籤頁名稱",
    ph_preset_tags: "#標籤... (可拖入)",
    set_theme: "主題",
    set_theme_auto: "自動",
    set_theme_light: "亮色",
    set_theme_dark: "暗色",
    set_interface: "介面",
    set_show_all: "顯示「全部」標籤頁",
    set_language: "語言 (Language)",
    set_backup: "備份與還原",
    notif_copied: "已複製: ",
    notif_added: "已新增!",
    notif_updated: "已更新!",
    notif_deleted: "已刪除",
    notif_moved: "已移動",
    notif_prio_added: "已加入優先列",
    notif_prio_exists: "已在優先列中",
    notif_unpacked: "已解包",
    ui_all_tab: "❖ 全部",
    ui_new_tag: "新標籤",
    ui_new_tab: "新標籤頁",
    ui_add_chip: "+ 新增",
    ui_edit_tab: "編輯標籤頁",
    ui_list_empty: "列表為空。",
    ui_history_empty: "暫無歷史。",
    ui_selected: "已選",
    confirm_nuke: "這將清除擴充功能中的所有資料。確定要繼續嗎？",
    confirm_delete: "確定刪除？"
  }
};

// --- 2. SELF-CLEANUP ---
const existing = document.getElementById('hashtag-manager-container');
if (existing) existing.remove();

// --- 3. UI INITIALIZATION ---
const container = document.createElement('div');
container.id = 'hashtag-manager-container';

const ICONS = {
  history: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  presets: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>',
  prio: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"></path></svg>',
  sort: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>',
  select: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  edit: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
  add: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
};

// Initial Render Structure
container.innerHTML = `
  <div id="hashtag-toggle" title="Hashtag Manager">#</div>
  
  <div id="panel-wrapper" class="hidden">
    
    <div id="priority-drawer" class="drawer">
      <div class="drawer-resize-handle"></div>
      <div class="drawer-header">
        <span data-i18n="header_priority">Priority Ladder</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <label class="toggle-switch" title="Enable Priority Sorting">
            <input type="checkbox" id="priority-active-toggle">
            <span class="slider round"></span>
          </label>
          <button id="close-prio-btn" class="mini-btn">×</button>
        </div>
      </div>
      <div class="drawer-instruction">
        <span id="prio-status-text">Sorting is OFF.</span>
        <div style="font-size:11px; opacity:0.7; margin-top:4px;" data-i18n="instr_prio_sub">Drag to reorder.<br>Click tags to add.</div>
      </div>
      <div id="priority-list" class="priority-list"></div>
    </div>

    <div id="history-drawer" class="drawer">
      <div class="drawer-resize-handle"></div>
      <div class="drawer-header">
        <span data-i18n="header_history">Recent History</span>
        <button id="close-history-btn" class="mini-btn">×</button>
      </div>
      <div class="drawer-instruction" data-i18n="instr_history">Your last 10 copies.</div>
      <div id="history-list" class="priority-list"></div>
    </div>

    <div id="presets-drawer" class="drawer">
      <div class="drawer-resize-handle"></div>
      <div class="drawer-header">
        <span data-i18n="header_presets">Presets</span>
        <div style="display:flex; align-items:center; gap:4px;">
            <button id="add-preset-btn" class="mini-btn" title="New Preset">+</button>
            <button id="close-presets-btn" class="mini-btn">×</button>
        </div>
      </div>
      <div class="drawer-instruction" data-i18n="instr_presets">Click to unpack into selection.</div>
      <div id="new-preset-form" class="edit-form hidden" style="margin: 10px; width:auto;">
        <input type="text" id="new-preset-name" class="form-input" placeholder="Name">
        <textarea id="new-preset-tags" class="form-input drop-target" rows="3" placeholder="#Tags... (Drag chips here)"></textarea>
        <div class="form-buttons">
            <button id="save-new-preset" class="save-btn" data-i18n="btn_save">Save</button>
            <button id="cancel-new-preset" class="cancel-btn" data-i18n="btn_cancel">Cancel</button>
        </div>
      </div>
      <div id="presets-list" class="priority-list"></div>
    </div>

    <div id="hashtag-panel">
      <div class="panel-header">
        <div style="display: flex; align-items: center; gap: 4px; width: 100%; justify-content: flex-end;">
          <button id="history-mode-btn" class="header-icon-btn" title="History">${ICONS.history}</button>
          <button id="presets-mode-btn" class="header-icon-btn" title="Presets">${ICONS.presets}</button>
          <button id="prio-mode-btn" class="header-icon-btn" title="Priority Ladder">${ICONS.prio}</button>
          <div style="width: 1px; height: 18px; background: #e1e8ed; margin: 0 4px;"></div>
          <button id="sort-btn" class="header-icon-btn" title="Toggle Visual Sort">${ICONS.sort}</button>
          <button id="select-mode-btn" class="header-icon-btn" title="Multi-Select Mode">${ICONS.select}</button>
          <button id="edit-mode-btn" class="header-icon-btn" title="Edit Items & Tabs">${ICONS.edit}</button>
          <button id="settings-btn" class="header-icon-btn" title="Settings">${ICONS.settings}</button>
          <button id="close-panel" class="header-icon-btn" title="Close">${ICONS.close}</button>
        </div>
      </div>
      
      <div class="panel-content">
        <div id="main-view">
          <div class="search-container">
            <input type="text" id="search-input" placeholder="Search..." class="search-input">
          </div>

          <div class="tabs-scroll-wrapper">
            <button id="scroll-tabs-left" class="tab-scroll-btn hidden">‹</button>
            <div class="tabs-container" id="tabs-container">
              <div class="tabs" id="dynamic-tabs-list"></div>
            </div>
            <button id="scroll-tabs-right" class="tab-scroll-btn hidden">›</button>
          </div>
          
          <div id="dynamic-tab-content" class="tab-content"></div>
        </div>

        <div id="settings-view" class="hidden">
          <div class="settings-group">
            <div class="settings-description" style="margin-bottom:8px; font-weight:700;" data-i18n="set_theme">Theme</div>
            <div class="theme-toggles">
              <button class="theme-btn" data-theme="auto" data-i18n="set_theme_auto">Auto</button>
              <button class="theme-btn" data-theme="light" data-i18n="set_theme_light">Light</button>
              <button class="theme-btn" data-theme="dark" data-i18n="set_theme_dark">Dark</button>
            </div>
          </div>
          
           <div class="settings-group">
             <div class="settings-description" style="margin-bottom:8px; font-weight:700;" data-i18n="set_interface">Interface</div>
             <div class="settings-toggle-row">
                <span class="setting-label" data-i18n="set_show_all">Show "All Hashtags" Tab</span>
                <label class="toggle-switch">
                  <input type="checkbox" id="setting-show-all-tab">
                  <span class="slider round"></span>
                </label>
             </div>
             
             <!-- Language Selector -->
             <div class="settings-toggle-row" style="margin-top:8px;">
                <span class="setting-label" data-i18n="set_language">Language</span>
                <select id="language-select" class="mini-select" style="padding:4px; border-radius:6px; border:1px solid #cfd9de;">
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="zh_CN">简体中文</option>
                    <option value="zh_TW">繁體中文</option>
                </select>
             </div>
           </div>

          <div class="settings-group">
            <div class="settings-description" data-i18n="set_backup">Backup & Restore</div>
            <div class="buttons-row" style="display:flex; gap:10px;">
              <button id="export-btn" class="action-btn export-btn" style="flex:1" data-i18n="btn_export">Export</button>
              <button id="import-btn-ui" class="action-btn import-btn" style="flex:1" data-i18n="btn_import">Import</button>
            </div>
            <input type="file" id="import-file" accept=".json" style="display:none">
          </div>
          <div class="settings-group" style="border-bottom: none; margin-top: auto;">
            <button id="reset-data-btn" class="action-btn danger-btn" data-i18n="btn_clear_data">Clear All Data</button>
          </div>
        </div>
        
        <div id="new-tab-main-form" class="edit-form hidden" style="margin: 10px;">
           <div style="font-weight:bold; margin-bottom:5px;" data-i18n="ui_new_tab">Create New Tab</div>
           <input type="text" id="new-main-tab-name" class="form-input" placeholder="Tab Name">
           <div class="form-buttons">
             <button id="save-new-main-tab" class="save-btn" data-i18n="btn_create">Create</button>
             <button id="cancel-new-main-tab" class="cancel-btn" data-i18n="btn_cancel">Cancel</button>
           </div>
        </div>
        
        <div id="add-item-form" class="edit-form hidden" style="margin: 10px;">
            <div style="font-weight:bold; margin-bottom:5px;" data-i18n="ui_new_tag">New Tag</div>
            <input type="text" class="form-input" id="new-name" placeholder="Name">
            <textarea type="text" class="form-input drop-target" id="new-hashtags" rows="2" placeholder="#Hashtags..."></textarea>
            <div class="form-buttons">
                <button id="do-add-btn" class="save-btn" data-i18n="btn_add">Add</button>
                <button id="cancel-add-btn" class="cancel-btn" data-i18n="btn_cancel">Cancel</button>
            </div>
        </div>

      </div>
      
      <div id="copy-selected-bar" class="hidden">
          <div style="display: flex; flex-direction: column;">
              <div id="selected-count">0 items selected</div>
              <div id="char-counter" style="font-size: 11px; opacity: 0.8;">0/280</div>
          </div>
          <button id="copy-selected-btn" data-i18n="btn_copy">Copy</button>
      </div>

      <div id="notification" class="notification hidden"></div>
    </div>
    <div class="resize-handle"></div>
  </div>
`;

document.body.appendChild(container);

// ==========================================
// DATA & STATE
// ==========================================
let v2Data = {
  tabs: [], items: [], bundles: [], priorities: [], history: [],
  settings: { sortOrder: 'added', theme: 'auto', contextMenu: false, usePriority: false, showAllTab: true, language: 'en' },
  uiState: { width: 360, height: 550, drawerWidth: 240 }
};
const ALL_TAGS_TAB_ID = 'all_virtual_tab_permanent';
let appMode = 'view';
let activeTabId = null;
let selectedTags = new Set();
let editingItemId = null;
let editingBundleId = null;
let editingTabId = null;

function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2); }
function saveV2Data(cb) { try { chrome.storage.local.set({ v2_meta: true, v2_data: v2Data }, cb); } catch (e) { console.error(e); } }

// ==========================================
// TRANSLATION HELPER
// ==========================================
function t(key) {
    const lang = v2Data.settings.language || 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['en'][key] || key;
}

// Updates static text elements with data-i18n attributes
function applyTranslations() {
    const lang = v2Data.settings.language || 'en';
    
    // Update Tooltips (Titles)
    const tooltips = {
        'history-mode-btn': 'tt_history', 'presets-mode-btn': 'tt_presets', 'prio-mode-btn': 'tt_prio',
        'sort-btn': 'tt_sort', 'select-mode-btn': 'tt_select', 'edit-mode-btn': 'tt_edit',
        'settings-btn': 'tt_settings', 'close-panel': 'tt_close', 'add-preset-btn': 'tt_add'
    };
    for (const [id, key] of Object.entries(tooltips)) {
        const el = container.querySelector('#' + id);
        if(el) el.title = t(key);
    }
    
    // Update Text Content
    container.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(key) el.innerHTML = t(key); 
    });
    
    // Update Placeholders
    const placeholders = {
        'search-input': 'ph_search', 'new-preset-name': 'ph_name', 'new-preset-tags': 'ph_preset_tags',
        'new-main-tab-name': 'ph_tab_name', 'new-name': 'ph_name', 'new-hashtags': 'ph_tags'
    };
    for(const [id, key] of Object.entries(placeholders)) {
        const el = container.querySelector('#' + id);
        if(el) el.placeholder = t(key);
    }
    
    updatePriorityUIState();
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================
function copyToClipboard(t) { navigator.clipboard.writeText(t); }
function showNotification(m) { const n = container.querySelector('#notification'); n.textContent = m; n.classList.remove('hidden'); setTimeout(()=>n.classList.add('hidden'),2000); }

function handleCopy(name, text) { 
  copyToClipboard(text); 
  showNotification(`${t('notif_copied')}${name}`); 
  addToHistory(name, text); 
}

function getTwitterCount(text) { let l=0; for(const c of text) { const k=c.codePointAt(0); l+=(k>=0&&k<=4351)?1:2; } return l; }

function sortHashtagList(tagsArray) {
  if (!v2Data.settings.usePriority) return tagsArray;
  const finalTags = [];
  let remaining = [...tagsArray];
  v2Data.priorities.forEach(prioId => {
    const tab = v2Data.tabs.find(t => t.id === prioId);
    if (tab) {
      const itemsInTab = v2Data.items.filter(i => i.tabId === tab.id);
      const matched = remaining.filter(tag => itemsInTab.some(i => i.hashtags === tag));
      finalTags.push(...matched); remaining = remaining.filter(t => !matched.includes(t));
    } else {
      const item = v2Data.items.find(i => i.id === prioId) || v2Data.bundles.find(b => b.id === prioId);
      if (item && remaining.includes(item.hashtags)) { finalTags.push(item.hashtags); remaining = remaining.filter(t => t !== item.hashtags); }
    }
  });
  finalTags.push(...remaining); return finalTags;
}

function getSelectedText() {
  const tags = Array.from(selectedTags);
  return sortHashtagList(tags).join(' ');
}

function updateSelectionUI() { 
  container.querySelector('#selected-count').textContent = `${selectedTags.size} ${t('ui_selected')}`; 
  const txt = getSelectedText(); 
  const l = getTwitterCount(txt); 
  const el = container.querySelector('#char-counter'); 
  el.textContent = `${l}/280`; 
  el.style.color = l>280?'#f4212e':'inherit'; 
}

function handleAddPrio(id) {
    if (id === ALL_TAGS_TAB_ID) return; 
    if (!v2Data.priorities.includes(id)) { 
        v2Data.priorities.push(id); 
        renderPriorityList(); 
        saveV2Data(); 
        showNotification(t('notif_prio_added'));
    } else {
        showNotification(t('notif_prio_exists'));
    }
}

function addToHistory(name, hashtags) {
  v2Data.history = v2Data.history.filter(h => h.hashtags !== hashtags);
  v2Data.history.unshift({ name, hashtags, id: generateId() });
  if (v2Data.history.length > 10) v2Data.history.pop();
  saveV2Data();
  if(appMode === 'history') renderHistoryList();
}

function renderSettings() { 
    applyTheme();
    container.querySelectorAll('.theme-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === (v2Data.settings.theme || 'auto')));
    const toggle = container.querySelector('#setting-show-all-tab');
    if(toggle) {
        toggle.checked = v2Data.settings.showAllTab !== false; 
        toggle.onchange = (e) => {
            v2Data.settings.showAllTab = e.target.checked;
            if (!e.target.checked && activeTabId === ALL_TAGS_TAB_ID) {
                const first = [...v2Data.tabs].sort((a,b)=>a.order-b.order)[0];
                activeTabId = first ? first.id : null;
            }
            saveV2Data(renderApp);
        };
    }
    const langSelect = container.querySelector('#language-select');
    if(langSelect) {
        langSelect.value = v2Data.settings.language || 'en';
        langSelect.onchange = (e) => {
            v2Data.settings.language = e.target.value;
            applyTranslations(); 
            renderApp();
            saveV2Data();
        };
    }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================
function renderPriorityList() {
  const list = container.querySelector('#priority-list'); 
  if(!list) return; list.innerHTML = '';
  
  if (v2Data.priorities.length === 0) {
      list.innerHTML = `<div style="padding:15px; color:#536471; font-size:13px; text-align:center;">${t('ui_list_empty')}</div>`;
      return;
  }

  v2Data.priorities.forEach((pid, index) => {
    const el = document.createElement('div'); el.className = 'priority-item';
    el.draggable = true;
    let label = "Unknown"; const tab = v2Data.tabs.find(t => t.id === pid);
    if (tab) label = `📂 ${tab.name}`; else { const item = v2Data.items.find(i => i.id === pid) || v2Data.bundles.find(b => b.id === pid); if (item) label = `# ${item.name}`; }
    if(label === "Unknown") { v2Data.priorities = v2Data.priorities.filter(id => id !== pid); saveV2Data(); return; }
    el.textContent = label;
    el.addEventListener('dragstart', (e) => e.dataTransfer.setData('prio_index', index));
    el.addEventListener('dragover', (e) => e.preventDefault());
    el.addEventListener('drop', (e) => { 
        e.preventDefault(); const fromIndex = e.dataTransfer.getData('prio_index'); 
        if (fromIndex !== "") { const item = v2Data.priorities.splice(fromIndex, 1)[0]; v2Data.priorities.splice(index, 0, item); renderPriorityList(); saveV2Data(); } 
    });
    const del = document.createElement('button'); del.innerHTML = '×'; del.className = 'mini-btn'; del.style.marginLeft = 'auto'; 
    del.onclick = () => { v2Data.priorities = v2Data.priorities.filter(id => id !== pid); renderPriorityList(); saveV2Data(); };
    del.addEventListener('dragstart', (e) => { e.preventDefault(); e.stopPropagation(); });
    del.addEventListener('mousedown', (e) => e.stopPropagation());
    el.appendChild(del);
    list.appendChild(el);
  });
}

function renderHistoryList() {
  const list = container.querySelector('#history-list'); if(!list) return; list.innerHTML = '';
  if (v2Data.history.length === 0) { list.innerHTML = `<div style="padding:15px; color:#536471; font-size:13px; text-align:center;">${t('ui_history_empty')}</div>`; return; }
  v2Data.history.forEach(item => {
    const el = document.createElement('div'); el.className = 'priority-item'; el.style.cursor = 'pointer';
    el.title = item.hashtags; 
    const icon = `<svg width="14" height="14" style="margin-right:8px; opacity:0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    el.innerHTML = `${icon} <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</span>`;
    el.draggable = true;
    el.addEventListener('dragstart', (e) => handleDragStart(e, item.hashtags, 'text'));
    el.onclick = () => { handleCopy(item.name, item.hashtags); };
    list.appendChild(el);
  });
}

function renderPresetsList() {
  const list = container.querySelector('#presets-list'); if(!list) return; list.innerHTML = '';
  v2Data.bundles.forEach(b => {
    if (editingBundleId === b.id) {
       const form = document.createElement('div'); form.className = 'edit-form'; form.style.margin = '0 0 8px 0';
       form.innerHTML = `<input type="text" class="form-input" value="${b.name}" id="edit-pre-name-${b.id}"><textarea class="form-input" rows="3" id="edit-pre-tags-${b.id}">${b.hashtags}</textarea><div class="form-buttons"><button class="save-btn" id="save-pre-${b.id}">${t('btn_save')}</button><button class="delete-btn-form" id="del-pre-${b.id}">${t('btn_delete')}</button></div>`;
       form.querySelector(`#save-pre-${b.id}`).onclick = () => { b.name = form.querySelector(`#edit-pre-name-${b.id}`).value; b.hashtags = form.querySelector(`#edit-pre-tags-${b.id}`).value; editingBundleId = null; saveV2Data(renderPresetsList); };
       form.querySelector(`#del-pre-${b.id}`).onclick = () => { if(confirm(t('confirm_delete'))) { v2Data.bundles = v2Data.bundles.filter(x => x.id !== b.id); editingBundleId = null; saveV2Data(renderPresetsList); } };
       list.appendChild(form);
    } else {
       const el = document.createElement('div'); el.className = 'priority-item'; el.style.cursor = 'pointer'; el.style.justifyContent = 'space-between';
       const count = getTwitterCount(b.hashtags);
       const isOver = count > 280;
       el.innerHTML = `<div style="display:flex; align-items:center; overflow:hidden; flex:1; min-width:0;"><span style="margin-right:6px; flex-shrink:0;">📦</span><span class="item-name" style="flex:0 1 auto; margin-right:8px;">${b.name}</span><span style="font-size:11px; color:${isOver ? '#f4212e' : '#536471'}; opacity:0.8; white-space:nowrap; flex-shrink:0;">${count}/280</span></div><button class="mini-btn edit-preset-btn" style="margin-left:4px; flex-shrink:0;">✎</button>`;
       el.draggable = true;
       el.addEventListener('dragstart', (e) => { const rawTags = b.hashtags.split(' ').filter(t=>t.trim()); const sortedText = sortHashtagList(rawTags).join(' '); handleDragStart(e, sortedText, 'text'); });
       el.onclick = (e) => { if(e.target.classList.contains('edit-preset-btn')) { editingBundleId = b.id; renderPresetsList(); return; } if (appMode === 'select') { const tags = b.hashtags.split(' '); let c=0; tags.forEach(t=>{if(t.trim()){selectedTags.add(t.trim());c++}}); updateSelectionUI(); renderApp(); showNotification(`${t('notif_unpacked')} ${c}`); } else { const rawTags = b.hashtags.split(' ').filter(t=>t.trim()); const sortedText = sortHashtagList(rawTags).join(' '); handleCopy(b.name, sortedText); } };
       list.appendChild(el);
    }
  });
}

// ==========================================
// INITIAL LOAD
// ==========================================
try {
  chrome.storage.local.get(null, (result) => {
    if (chrome.runtime.lastError) return;
    if (result.v2_meta) {
      v2Data = result.v2_data;
      if(!v2Data.settings) v2Data.settings = {};
      if(v2Data.settings.showAllTab === undefined) v2Data.settings.showAllTab = true;
      if(!v2Data.settings.language) v2Data.settings.language = 'en';
      if(!v2Data.uiState) v2Data.uiState = { width: 360, height: 550, drawerWidth: 240 };
    } else {
      v2Data.tabs = []; v2Data.items = []; v2Data.settings.language = 'en'; saveV2Data();
    }
    const wrapper = container.querySelector('#panel-wrapper');
    wrapper.style.width = v2Data.uiState.width + 'px';
    wrapper.style.height = v2Data.uiState.height + 'px';
    container.querySelectorAll('.drawer').forEach(d => d.style.width = v2Data.uiState.drawerWidth + 'px');
    if (v2Data.tabs.length > 0 && !activeTabId) activeTabId = v2Data.tabs[0].id;
    applyTranslations(); applyTheme(); renderApp();
    const prT = container.querySelector('#priority-active-toggle'); if(prT) prT.checked = v2Data.settings.usePriority;
  });
} catch(e) {}

// ==========================================
// MODE LOGIC
// ==========================================
function setMode(newMode) {
    if (appMode === newMode && newMode !== 'view') appMode = 'view';
    else appMode = newMode;
    updateUIForMode();
}

function updateUIForMode() {
    const drawers = { prio: container.querySelector('#priority-drawer'), history: container.querySelector('#history-drawer'), presets: container.querySelector('#presets-drawer') };
    const panel = container.querySelector('#hashtag-panel');
    // REMOVED 'add-mode-btn' from list
    ['history-mode-btn', 'prio-mode-btn','presets-mode-btn','select-mode-btn','edit-mode-btn','settings-btn'].forEach(id => {
        const btn = container.querySelector('#'+id);
        if(btn) { const btnMode = id.replace('-mode-btn', '').replace('-btn', ''); const isActive = appMode === btnMode || (appMode==='prio' && id==='prio-mode-btn') || (appMode==='history' && id==='history-mode-btn') || (appMode==='presets' && id==='presets-mode-btn'); btn.classList.toggle('active', isActive); }
    });
    panel.classList.remove('mode-edit', 'mode-select');
    if (appMode === 'edit') panel.classList.add('mode-edit');
    if (appMode === 'select') panel.classList.add('mode-select');
    Object.values(drawers).forEach(d => d.classList.remove('open'));
    if (drawers[appMode]) { drawers[appMode].classList.add('open'); if(appMode === 'prio') { renderPriorityList(); updatePriorityUIState(); } if(appMode === 'history') renderHistoryList(); if(appMode === 'presets') renderPresetsList(); }
    const mainView = container.querySelector('#main-view'); const settingsView = container.querySelector('#settings-view');
    mainView.classList.toggle('hidden', appMode === 'settings'); settingsView.classList.toggle('hidden', appMode !== 'settings');
    if(appMode === 'settings') renderSettings();
    container.querySelector('#add-item-form')?.classList.add('hidden');
    container.querySelector('#new-tab-main-form')?.classList.add('hidden');
    const viewContainer = container.querySelector('#view-container');
    if (viewContainer) { if(appMode !== 'settings') viewContainer.classList.remove('hidden'); else viewContainer.classList.add('hidden'); }
    container.querySelector('#copy-selected-bar').classList.toggle('hidden', appMode !== 'select');
    if (appMode === 'select') updateSelectionUI(); else selectedTags.clear();
    if (appMode !== 'edit') { editingItemId = null; editingTabId = null; }
    renderApp();
}

// BINDINGS
function bindBtn(id, handler) { const btn = container.querySelector('#'+id); if(btn) btn.onclick = handler; }
bindBtn('history-mode-btn', () => setMode('history')); bindBtn('close-history-btn', () => setMode('view'));
bindBtn('prio-mode-btn', () => setMode('prio')); bindBtn('close-prio-btn', () => setMode('view'));
bindBtn('presets-mode-btn', () => setMode('presets')); bindBtn('close-presets-btn', () => setMode('view'));
bindBtn('select-mode-btn', () => setMode('select')); bindBtn('edit-mode-btn', () => setMode('edit'));
bindBtn('settings-btn', () => setMode('settings')); bindBtn('close-panel', () => container.querySelector('#panel-wrapper').classList.add('hidden'));

// Form Cancels
bindBtn('cancel-new-main-tab', () => { container.querySelector('#new-tab-main-form').classList.add('hidden'); if(container.querySelector('#view-container')) container.querySelector('#view-container').classList.remove('hidden'); });
bindBtn('save-new-main-tab', () => {
    const name = container.querySelector('#new-main-tab-name').value.trim();
    if(name) { const max = v2Data.tabs.reduce((m, t) => Math.max(m, t.order), 0); v2Data.tabs.push({ id: generateId(), name, order: max + 1, type: 'custom' }); saveV2Data(() => { container.querySelector('#new-tab-main-form').classList.add('hidden'); container.querySelector('#new-main-tab-name').value = ''; renderApp(); }); }
});
bindBtn('cancel-add-btn', () => { container.querySelector('#add-item-form').classList.add('hidden'); if(container.querySelector('#view-container')) container.querySelector('#view-container').classList.remove('hidden'); });
bindBtn('do-add-btn', () => {
    const name = container.querySelector('#new-name').value.trim(); const tags = container.querySelector('#new-hashtags').value.trim();
    if (name && tags) { const targetTab = (activeTabId === ALL_TAGS_TAB_ID) ? null : activeTabId; const newItem = { id: generateId(), name, hashtags: tags, tabId: targetTab, addedAt: Date.now() }; v2Data.items.push(newItem); saveV2Data(() => { container.querySelector('#add-item-form').classList.add('hidden'); container.querySelector('#new-name').value=''; container.querySelector('#new-hashtags').value=''; renderApp(); showNotification(t('notif_added')); }); }
});
setupDropTarget(container.querySelector('#new-hashtags')); 

// Priority Toggle
const prioActiveToggle = container.querySelector('#priority-active-toggle');
if(prioActiveToggle) { prioActiveToggle.addEventListener('change', (e) => { v2Data.settings.usePriority = e.target.checked; saveV2Data(updatePriorityUIState); }); }
function updatePriorityUIState() { const isOn = v2Data.settings.usePriority; container.querySelector('#prio-status-text').textContent = isOn ? t('instr_prio_on') : t('instr_prio_off'); container.querySelector('#priority-list').classList.toggle('disabled-visual', !isOn); }

// Presets
bindBtn('add-preset-btn', () => { const f = container.querySelector('#new-preset-form'); f.classList.toggle('hidden'); if(!f.classList.contains('hidden')) container.querySelector('#new-preset-name').focus(); });
bindBtn('cancel-new-preset', () => container.querySelector('#new-preset-form').classList.add('hidden'));
bindBtn('save-new-preset', () => { const name = container.querySelector('#new-preset-name').value.trim(); const tags = container.querySelector('#new-preset-tags').value.trim(); if(name && tags) { v2Data.bundles.push({ id: generateId(), name, hashtags: tags, addedAt: Date.now() }); saveV2Data(renderPresetsList); container.querySelector('#new-preset-form').classList.add('hidden'); container.querySelector('#new-preset-name').value = ''; container.querySelector('#new-preset-tags').value = ''; } });

// Drag Handlers
function handleDragStart(e, idOrText, type) { e.dataTransfer.effectAllowed = 'copyMove'; if(type !== 'text') { e.dataTransfer.setData('application/x-hashtag-manager', JSON.stringify({id: idOrText, type})); } let txt = idOrText; if(type === 'item') { const i = v2Data.items.find(x=>x.id===idOrText); if(i) txt = i.hashtags; } e.dataTransfer.setData('text/plain', txt); }
function handleDragOver(e) { if (appMode === 'prio' || e.target.classList.contains('drop-target') || e.target.classList.contains('tab-btn')) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; } }
function handleDropOnLadder(e) { e.preventDefault(); try { const raw = e.dataTransfer.getData('application/x-hashtag-manager'); if(raw) { const data = JSON.parse(raw); if(data.id === ALL_TAGS_TAB_ID) return; if (data.id && !v2Data.priorities.includes(data.id)) { v2Data.priorities.push(data.id); renderPriorityList(); saveV2Data(); } } } catch(err) {} }
function handleTabDrop(e, targetTabId) { e.preventDefault(); if(targetTabId === ALL_TAGS_TAB_ID) return; try { const raw = e.dataTransfer.getData('application/x-hashtag-manager'); if(raw) { const data = JSON.parse(raw); if (data.type === 'item') { const item = v2Data.items.find(i => i.id === data.id); if (item && item.tabId !== targetTabId) { item.tabId = targetTabId; saveV2Data(() => { renderApp(); showNotification(t('notif_moved')); }); } } else if (data.type === 'tab' && data.id !== targetTabId && data.id !== ALL_TAGS_TAB_ID) { const tabs = [...v2Data.tabs]; const f = tabs.findIndex(t => t.id === data.id); const t = tabs.findIndex(t => t.id === targetTabId); if(f>-1 && t>-1) { const [m] = tabs.splice(f, 1); tabs.splice(t, 0, m); tabs.forEach((x, i) => x.order = i); v2Data.tabs = tabs; saveV2Data(renderTabsHeader); } } } } catch(err) {} }
function setupDropTarget(el) { el.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }); el.addEventListener('drop', (e) => { e.preventDefault(); const text = e.dataTransfer.getData('text/plain'); if(text) { const current = el.value; el.value = current + (current && !current.endsWith(' ') ? ' ' : '') + text; } }); }
setupDropTarget(container.querySelector('#new-preset-tags')); setupDropTarget(container.querySelector('#new-hashtags')); 
container.querySelector('#priority-list').addEventListener('dragover', handleDragOver); container.querySelector('#priority-list').addEventListener('drop', handleDropOnLadder);

// MAIN RENDERERS
function renderApp() { renderTabsHeader(); renderActiveTabContent(); updateScrollButtons(); }
function renderTabsHeader() {
  const list = container.querySelector('#dynamic-tabs-list'); list.innerHTML = '';
  // All Tab
  const forceShowAll = v2Data.tabs.length === 0;
  if(v2Data.settings.showAllTab !== false || forceShowAll) {
      const allBtn = document.createElement('button'); allBtn.className = `tab-btn ${activeTabId === ALL_TAGS_TAB_ID ? 'active' : ''}`; allBtn.innerHTML = t('ui_all_tab'); allBtn.style.fontWeight = '800';
      allBtn.onclick = () => { if(container.querySelector('#add-item-form')) container.querySelector('#add-item-form').classList.add('hidden'); activeTabId = ALL_TAGS_TAB_ID; editingTabId = null; editingItemId = null; container.querySelector('#search-input').value = ''; renderApp(); };
      list.appendChild(allBtn);
  }
  // Normal Tabs
  const sorted = [...v2Data.tabs].sort((a, b) => a.order - b.order);
  sorted.forEach(tab => {
    if(tab.type === 'bundle') return; 
    const btn = document.createElement('button'); btn.className = `tab-btn ${activeTabId === tab.id ? 'active' : ''}`; btn.textContent = tab.name; btn.draggable = true;
    btn.addEventListener('dragstart', (e) => handleDragStart(e, tab.id, 'tab')); btn.addEventListener('dragover', (e) => e.preventDefault()); btn.addEventListener('drop', (e) => handleTabDrop(e, tab.id));
    btn.onclick = () => { 
        if(container.querySelector('#add-item-form')) container.querySelector('#add-item-form').classList.add('hidden');
        activeTabId = tab.id; editingTabId = null; editingItemId = null; container.querySelector('#search-input').value = ''; renderApp(); 
    };
    if(appMode === 'edit') { const pen = document.createElement('span'); pen.innerHTML = ' ✎'; pen.style.opacity=0.6; btn.appendChild(pen); btn.onclick = (e) => { e.stopPropagation(); if(editingTabId === tab.id) { editingTabId = null; } else { editingTabId = tab.id; editingItemId = null; } renderApp(); }; }
    list.appendChild(btn);
  });
  // Add Tab Button (+)
  const addTabBtn = document.createElement('button'); addTabBtn.className = 'tab-btn add-tab-btn'; addTabBtn.innerHTML = '+'; addTabBtn.title = t('tt_add');
  addTabBtn.onclick = () => { container.querySelector('#new-tab-main-form').classList.remove('hidden'); container.querySelector('#view-container')?.classList.add('hidden'); container.querySelector('#new-main-tab-name').focus(); };
  list.appendChild(addTabBtn);
}

function renderActiveTabContent() {
  const c = container.querySelector('#dynamic-tab-content'); c.innerHTML=''; 
  if (activeTabId !== ALL_TAGS_TAB_ID) { const t = v2Data.tabs.find(x=>x.id===activeTabId); if(!t) { if(v2Data.settings.showAllTab !== false || v2Data.tabs.length === 0) activeTabId = ALL_TAGS_TAB_ID; else { const f = v2Data.tabs.find(x => x.type !== 'bundle'); if(f) activeTabId = f.id; else return; } } }
  if(editingTabId && appMode === 'edit') { const tab = v2Data.tabs.find(t => t.id === editingTabId); if(tab) { c.appendChild(createTabEditForm(tab)); return; } }
  
  const vd = document.createElement('div'); vd.id='view-container'; vd.className='view-container';
  const il = document.createElement('div'); il.className='items-list';
  
  let its = []; if (activeTabId === ALL_TAGS_TAB_ID) its = [...v2Data.items]; else its = v2Data.items.filter(i => i.tabId === activeTabId);
  if(v2Data.settings.sortOrder==='alpha') its.sort((a,b)=>a.name.localeCompare(b.name)); else its.sort((a,b)=>a.addedAt-b.addedAt);
  const term = container.querySelector('#search-input').value.toLowerCase().trim();
  
  its.forEach(i=>{ if(term&&!i.name.toLowerCase().includes(term))return; if(editingItemId===i.id) il.appendChild(createEditForm(i)); else il.appendChild(createItemChip(i)); });
  
  // Add Tag Chip (+ Add)
  const addTagChip = document.createElement('div'); addTagChip.className = 'item add-item-chip'; 
  addTagChip.innerHTML = t('ui_add_chip');
  addTagChip.onclick = () => { container.querySelector('#add-item-form').classList.remove('hidden'); container.querySelector('#view-container').classList.add('hidden'); container.querySelector('#new-name').focus(); };
  il.appendChild(addTagChip);

  vd.appendChild(il); c.appendChild(vd);
}

function createItemChip(data) {
  const chip = document.createElement('div'); chip.className = 'item'; if (selectedTags.has(data.hashtags)) chip.classList.add('selected');
  chip.innerHTML = `<span class="item-name">${data.name}</span>`; chip.draggable = true;
  chip.addEventListener('dragstart', (e) => { handleDragStart(e, data.id, 'item'); e.dataTransfer.setData('text/plain', data.hashtags); });
  chip.addEventListener('click', (e) => { e.stopPropagation(); if (appMode === 'select') { if(selectedTags.has(data.hashtags)) selectedTags.delete(data.hashtags); else selectedTags.add(data.hashtags); updateSelectionUI(); renderApp(); } else if (appMode === 'edit') { editingItemId = data.id; renderApp(); } else if (appMode === 'prio') { handleAddPrio(data.id); } else { handleCopy(data.name, data.hashtags); } });
  return chip;
}

function createEditForm(data) {
  const form = document.createElement('div'); form.className = 'edit-form';
  form.innerHTML = `<input type="text" class="form-input" id="edit-name" value="${data.name}"><input type="text" class="form-input" id="edit-hashtags" value="${data.hashtags}"><div class="form-buttons"><button id="do-save-btn" class="save-btn">${t('btn_save')}</button><button id="cancel-edit-btn" class="cancel-btn">${t('btn_cancel')}</button><button id="do-delete-btn" class="delete-btn-form">${t('btn_delete')}</button></div>`;
  form.querySelector('#cancel-edit-btn').onclick = () => { editingItemId=null; renderApp(); };
  form.querySelector('#do-save-btn').onclick = () => { const name = form.querySelector('#edit-name').value.trim(); const tags = form.querySelector('#edit-hashtags').value.trim(); if (name && tags) { data.name = name; data.hashtags = tags; saveV2Data(() => { editingItemId=null; renderApp(); showNotification(t('notif_updated')); }); } };
  form.querySelector('#do-delete-btn').onclick = () => { if(confirm(t('confirm_delete'))) { v2Data.items = v2Data.items.filter(i=>i.id!==data.id); saveV2Data(() => { editingItemId=null; renderApp(); showNotification(t('notif_deleted')); }); } };
  return form;
}
function createTabEditForm(tab) {
    const form = document.createElement('div'); form.className = 'edit-form'; 
    form.innerHTML = `<div style="font-weight:700; margin-bottom:10px;">${t('ui_edit_tab')}</div><input type="text" class="form-input" id="edit-tab-name" value="${tab.name}"><div class="form-buttons"><button id="save-tab-edit" class="save-btn">${t('btn_save')}</button><button id="cancel-tab-edit" class="cancel-btn">${t('btn_cancel')}</button><button id="delete-tab-btn" class="delete-btn-form">${t('btn_delete')}</button></div>`;
    form.querySelector('#cancel-tab-edit').onclick = () => { editingTabId=null; renderApp(); };
    form.querySelector('#save-tab-edit').onclick = () => { const n = form.querySelector('#edit-tab-name').value.trim(); if(n) { tab.name=n; editingTabId=null; saveV2Data(renderApp); } };
    form.querySelector('#delete-tab-btn').onclick = () => { const count = v2Data.items.filter(i => i.tabId === tab.id).length; const msg = count > 0 ? `Delete "${tab.name}"?\n${count} tags will become uncategorized (visible in 'All').` : t('confirm_delete'); if(confirm(msg)) { v2Data.tabs = v2Data.tabs.filter(t=>t.id!==tab.id); if(v2Data.settings.showAllTab !== false) activeTabId = ALL_TAGS_TAB_ID; else { activeTabId = v2Data.tabs[0]?.id || ALL_TAGS_TAB_ID; } editingTabId=null; saveV2Data(renderApp); } };
    return form;
}

const tc = container.querySelector('#tabs-container'), sl = container.querySelector('#scroll-tabs-left'), sr = container.querySelector('#scroll-tabs-right');
function updateScrollButtons() { if(!tc)return; sl.classList.toggle('hidden', tc.scrollLeft <= 0); sr.classList.toggle('hidden', tc.scrollWidth <= tc.clientWidth + tc.scrollLeft + 1); }
if(tc) { tc.onscroll = updateScrollButtons; new ResizeObserver(updateScrollButtons).observe(tc); sl.onclick = () => tc.scrollBy({left:-120,behavior:'smooth'}); sr.onclick = () => tc.scrollBy({left:120,behavior:'smooth'}); }

function applyTheme() {
  const wrapper = container.querySelector('#panel-wrapper'); if(!wrapper) return;
  let isDark = false; const mode = v2Data.settings.theme || 'auto';
  if (mode === 'auto') { const bg = window.getComputedStyle(document.body).backgroundColor.match(/\d+/g); if(bg) isDark = ((parseInt(bg[0])*299+parseInt(bg[1])*587+parseInt(bg[2])*114)/1000 < 128); } else isDark = (mode === 'dark');
  if(isDark) wrapper.classList.add('dark-mode'); else wrapper.classList.remove('dark-mode');
  container.querySelectorAll('.theme-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === mode));
}
const themeObserver = new MutationObserver(() => { if(v2Data.settings.theme === 'auto') applyTheme(); });
themeObserver.observe(document.documentElement, { attributes: true }); themeObserver.observe(document.body, { attributes: true });
document.addEventListener('click', (e) => { if (e.target.classList.contains('theme-btn')) { v2Data.settings.theme = e.target.dataset.theme; saveV2Data(applyTheme); } });

bindBtn('hashtag-toggle', () => { const p = container.querySelector('#panel-wrapper'); p.classList.toggle('hidden'); if(!p.classList.contains('hidden')) { applyTheme(); updateScrollButtons(); container.querySelector('#search-input').focus(); } });
bindBtn('sort-btn', () => { v2Data.settings.sortOrder = (v2Data.settings.sortOrder === 'added') ? 'alpha' : 'added'; saveV2Data(() => { renderApp(); showNotification(v2Data.settings.sortOrder === 'alpha' ? 'A-Z' : 'Date'); }); });
container.querySelector('#search-input').addEventListener('input', renderApp);

const wrapper = container.querySelector('#panel-wrapper'), handle = wrapper.querySelector('.resize-handle');
let isResizing = false, startX, startY, startWidth, startHeight;
handle.addEventListener('mousedown', (e) => { isResizing = true; startX = e.clientX; startY = e.clientY; startWidth = wrapper.offsetWidth; startHeight = wrapper.offsetHeight; e.preventDefault(); });
document.addEventListener('mousemove', (e) => { if (!isResizing) return; const width = startWidth + (startX - e.clientX); const height = startHeight + (startY - e.clientY); if (width >= 300 && width <= 800) wrapper.style.width = width + 'px'; if (height >= 300 && height <= 800) wrapper.style.height = height + 'px'; v2Data.uiState.width = width; v2Data.uiState.height = height; });
document.addEventListener('mouseup', () => { if(isResizing) { isResizing=false; saveV2Data(); } });
container.querySelectorAll('.drawer').forEach(d => {
    const h = d.querySelector('.drawer-resize-handle'); if(!h) return; let drg = false, dsX, dsW;
    h.addEventListener('mousedown', (e) => { drg=true; dsX=e.clientX; dsW=d.offsetWidth; e.preventDefault(); e.stopPropagation(); });
    document.addEventListener('mousemove', (e) => { if(!drg) return; const w = dsW - (e.clientX - dsX); if(w > 150 && w < 400) { d.style.width = w + 'px'; v2Data.uiState.drawerWidth = w; container.querySelectorAll('.drawer').forEach(od => od.style.width = w + 'px'); } });
    document.addEventListener('mouseup', () => { if(drg) { drg=false; saveV2Data(); } });
});

bindBtn('export-btn', () => { const b = new Blob([JSON.stringify(v2Data,null,2)],{type:'application/json'}); const u = URL.createObjectURL(b), a = document.createElement('a'); a.href=u; a.download='hashtag_manager_pro_backup.json'; document.body.append(a); a.click(); a.remove(); });
bindBtn('import-btn-ui', () => container.querySelector('#import-file').click());
container.querySelector('#import-file').onchange = (e) => { const f = e.target.files[0], r = new FileReader(); r.onload = (ev) => { try { const d = JSON.parse(ev.target.result); if(d.tabs && d.items) { if(!d.priorities) d.priorities = []; if(!d.bundles) d.bundles = []; if(!d.history) d.history = []; if(!d.settings) d.settings = { sortOrder: 'added', theme: 'auto', language: 'en' }; v2Data = d; saveV2Data(()=>location.reload()); } else if(d.v2_meta) { v2Data = d.v2_data; saveV2Data(()=>location.reload()); } else if(d.avatars) { alert("V1 backup detected. Use V1 to migrate."); } } catch(err){ console.error(err); alert("Invalid file."); } }; if(f) r.readAsText(f); };
bindBtn('reset-data-btn', () => { if(confirm(t('confirm_nuke'))) chrome.storage.local.clear(()=>location.reload()); });

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.v2_data) {
    if (['view','select','history'].includes(appMode)) {
      v2Data = changes.v2_data.newValue;
      if (!v2Data.tabs.find(t => t.id === activeTabId)) activeTabId = v2Data.tabs[0]?.id;
      renderApp();
      if(appMode === 'history') renderHistoryList();
    }
  }
});
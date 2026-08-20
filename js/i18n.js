const translations = {
  'zh-TW': {
    // Navbar
    'nav-features': '功能特色',
    'nav-pricing': '方案比較',
    'nav-guide': '使用手冊',
    'nav-versions': '版本資訊',
    'nav-contact': '聯絡客服',
    'nav-privacy': '隱私權政策',

    // Hero
    'hero-title': '最好的關係，<br>從記得每一次互動開始。',
    'hero-subtitle': 'KinCue 是一款專注於體驗的家庭關係追蹤軟體，幫你記錄與家人的每一次通話、聚餐，並適時提醒你傳遞關心。',
    'hero-download': '在 App Store 下載',
    'hero-learn-more': '了解更多',

    // Features
    'features-section-title': '一趟增進家人關係的旅程',
    
    'feature-1-title': '關係儀表板，掌握每日節奏',
    'feature-1-desc': '一打開 App 就能看到「今日關係節奏」與「今日優先關心」，幫助你一眼看出今天該聯繫誰。將維繫家人感情變成輕鬆美好的日常習慣。',
    
    'feature-2-title': '建立專屬人物誌，記住每個細節',
    'feature-2-desc': '不只是聯絡人名單。KinCue 讓你記錄家人的衣服尺寸、喜好食物、過敏原與送禮靈感，讓每一次送禮都送到心坎裡，展現最深刻的關心。',
    
    'feature-3-title': '輕鬆新增聯絡人與紀錄互動',
    'feature-3-desc': '快速加入家人並記錄每次通話或聚餐。透過自訂聯絡方式圖示，讓每一次的互動紀錄都更加生動、直觀。',

    'feature-4-title': '全新日曆視圖，互動軌跡一目了然',
    'feature-4-desc': '新增獨立的日曆標籤頁，支援月、週、日視圖切換。過去的互動紀錄與未來的提醒排程清晰呈現，輕鬆回顧與家人的點點滴滴。',

    'feature-5-title': '升級 KinCue+，解鎖進階統計與洞察',
    'feature-5-desc': '專屬的統計面板為您分析互動次數、最常聯繫排行榜及聯繫方式分佈。幫助您看懂自己的聯繫節奏，更聰明地維繫家人感情。',

    'feature-6-title': '貼心設定，守護你的隱私與作息',
    'feature-6-desc': '設定「適合聯絡的時段」，確保不打擾家人的休息時間；支援 iCloud 安全備份，讓你的家庭記憶安全無虞，充滿安心感。',

    // Pricing
    'pricing-section-title': '比較方案',
    'pricing-section-subtitle': '查看免費版與 KinCue+ 各自包含的功能。',
    
    'billing-monthly': '月繳',
    'billing-yearly': '年繳',
    'billing-save': '省下 45%',
    
    'comparison-title': '功能比對列表',
    'comp-feature': '功能',
    'comp-free': '免費版',
    'comp-pro': 'KinCue+',
    
    'feature-label-1': '重要聯絡人',
    'feature-label-2': '聯絡提醒',
    'feature-label-3': '關係資訊',
    'feature-label-4': '互動紀錄',
    'feature-label-5': '年度回顧',
    'feature-label-6': '回憶影片',
    'feature-value-no': '不包含',
    'feature-value-1-free': '最多 4 位',
    'feature-value-1-pro': '不限人數',
    'feature-value-2-free': '基本聯絡提醒',
    'feature-value-2-pro': '日期、時段與<br>後續提醒',
    'feature-value-3-free': '基本話題提示',
    'feature-value-3-pro': '喜好、重要日<br>與自訂話題',
    'feature-value-4-free': '查看、搜尋<br>與篩選',
    'feature-value-4-pro': '查看、搜尋<br>與篩選',
    'feature-value-5-free': '基本年度摘要',
    'feature-value-5-pro': '趨勢、跨年<br>比較與分享',
    'feature-value-6-pro': '製作、儲存<br>與分享',
    
    'comp-cat-1': '重要聯絡人',
    'comp-item-1-1': '新增重要聯絡人',
    'comp-val-1-1-free': '最多 4 位',
    'comp-val-1-1-pro': '不限人數',
    'comp-item-1-2': '編輯聯絡人基本資料',
    
    'comp-cat-2': '互動紀錄',
    'comp-item-2-1': '新增與查看互動紀錄',
    'comp-item-2-2': '搜尋互動紀錄',
    'comp-item-2-3': '排序與篩選互動紀錄',

    'comp-cat-3': '日曆檢視 (1.1.0 全新功能)',
    'comp-item-3-1': '日曆檢視 (月/週/日視圖)',
    'comp-item-3-2': '日曆中新增、編輯與刪除紀錄',
    'comp-item-3-3': '顯示自訂聯絡方式圖示',
    'comp-item-3-4': '日曆統計面板 (互動次數、已聯繫人數)',
    'comp-item-3-5': '最常聯繫家人排行榜',
    'comp-item-3-6': '聯繫方式圓餅圖分佈洞察',

    'comp-cat-4': '聯絡提醒',
    'comp-item-4-1': '基本聯絡週期提醒',
    'comp-item-4-2': '提前溫馨提醒',
    'comp-item-4-3': '自訂提醒日期與時段',
    'comp-item-4-4': '生日提前 7 天提醒',
    'comp-item-4-5': '自訂重要事件提醒',
    'comp-item-4-6': '聯絡後續追蹤提醒',

    'comp-cat-5': '關係資訊',
    'comp-item-5-1': '基本聊天話題提示',
    'comp-item-5-2': '記錄對方喜好',
    'comp-item-5-3': '保存送禮靈感',
    'comp-item-5-4': '建立自訂重要日',
    'comp-item-5-5': '自訂聊天話題',

    'comp-cat-6': '年度回顧',
    'comp-item-6-1': '基本年度互動摘要',
    'comp-item-6-2': '每月互動趨勢',
    'comp-item-6-3': '聯絡方式分析',
    'comp-item-6-4': '年度精彩時刻',
    'comp-item-6-5': '年度互動時間軸',
    'comp-item-6-6': '跨年度比較',
    'comp-item-6-7': '分享年度回顧',

    'comp-cat-7': '回憶功能',
    'comp-item-7-1': '建立照片回憶',
    'comp-item-7-2': '製作回憶影片',
    'comp-item-7-3': '儲存回憶影片',
    'comp-item-7-4': '分享回憶影片',

    // Privacy Policy
    'privacy-title': '隱私權政策',
    'privacy-summary': 'KinCue 不需要帳號即可使用，大部分關係資料都留在你的裝置上。本政策說明資料何時會離開裝置，以及你可以如何管理。',
    'privacy-effective-date': '生效日期：2026 年 8 月 3 日',
    'privacy-sec-1-title': '儲存在此裝置的資料',
    'privacy-sec-1-desc': '你加入的姓名、關係資訊、電話、重要日期、偏好、筆記、互動紀錄與照片會儲存在此裝置的 KinCue 中，除非你主動匯出、刪除或備份。',
    'privacy-sec-2-title': '由你選擇的權限',
    'privacy-sec-2-desc': 'KinCue 只會使用你透過 Apple 聯絡人選取器挑選的聯絡人、你選取的照片，以及用於本機提醒的通知權限。你可以在「設定」App 中變更權限。',
    'privacy-sec-3-title': '選用的 iCloud 備份',
    'privacy-sec-3-desc': '只有在你提出要求時才會建立手動備份，並儲存在你 Apple 帳號的私人 iCloud Drive 空間。KinCue 不會在其他伺服器保留副本。',
    'privacy-sec-4-title': 'Apple 訂閱',
    'privacy-sec-4-desc': '購買與付款由 Apple 處理。KinCue 只會取得商品資訊與經驗證的訂閱狀態，不會取得完整的付款卡資料。',
    'privacy-sec-5-title': '使用分析',
    'privacy-sec-5-desc': '正式版本使用 Firebase Analytics 收集 App 執行個體識別碼、由遮蔽後 IP 位址推導的粗略位置、訂閱商品與購買事件，以及 KinCue+ 購買和恢復流程的互動。這些分析事件會與某次 App 安裝連結，但不會與姓名、電話、聯絡人、筆記、照片或關係紀錄連結。KinCue 僅用於了解功能使用情形及改善 App，不會用於廣告或跨 App 追蹤。Google 會依 Firebase 專案設定的保存期間保留事件層級的 Analytics 資料。',
    'privacy-sec-6-title': 'App 診斷',
    'privacy-sec-6-desc': '正式版本使用 Firebase Crashlytics 接收當機紀錄及有限的裝置、作業系統、App 版本與診斷資訊。這些資料不會連結你的關係紀錄，也不會用於廣告或追蹤。Firebase 通常保留當機報告 90 天。',
    'privacy-sec-7-title': '不販售、不投放廣告、不追蹤',
    'privacy-sec-7-desc': 'KinCue 不會販售或出租個人資料、不顯示第三方廣告，也不會跨其他公司的 App 或網站追蹤你。Apple 提供 iCloud 與訂閱服務；Google 僅提供上述使用分析與當機診斷。',
    'privacy-sec-8-title': '保存與刪除',
    'privacy-sec-8-desc': '本機資料會保留到你刪除資料或移除 KinCue。手動備份可從 iCloud Drive 刪除，訂閱可在 Apple 帳號中管理，任何匯出都由 Apple 分享介面交由你控制。',
    'privacy-sec-9-title': '問題與你的權利',
    'privacy-sec-9-desc': 'KinCue 沒有帳號系統，也不會接收你的關係紀錄，因此你可以直接在裝置與 iCloud Drive 中刪除資料。如有隱私問題，請使用 KinCue App Store 頁面的「App 支援」連結。',

    // Terms of Use
    'terms-title': '使用條款',
    'terms-summary': '歡迎使用 KinCue！為了保障您的權益，請在開始使用本服務前，詳細閱讀以下使用條款。當您下載或使用 KinCue，即表示您已閱讀、瞭解並同意接受本條款之所有內容。',
    'terms-effective-date': '生效日期：2026 年 8 月 3 日',
    'terms-sec-1-title': '1. 接受條款',
    'terms-sec-1-desc': '本使用條款構成您與 KinCue 開發團隊之間的合法協議。如果您不同意本條款的任何內容，請勿安裝或使用本應用程式。我們保留隨時修改本條款的權利，重大變更將透過 App 內通知或更新發布。',
    'terms-sec-2-title': '2. 服務說明',
    'terms-sec-2-desc': 'KinCue 是一款協助使用者記錄家庭關係與互動的軟體。我們致力於提供穩定的服務，但無法保證服務將免於中斷或完全無錯誤。我們保留隨時修改、暫停或終止服務（包含免費與付費功能）的權利。',
    'terms-sec-3-title': '3. 訂閱與付款 (KinCue+)',
    'terms-sec-3-desc': '我們提供付費訂閱服務（KinCue+）。所有訂閱、付款處理、取消與退款皆透過 Apple App Store 進行。訂閱會在目前週期結束前自動續訂，除非您在設定中提前至少 24 小時取消。我們不處理亦無法存取您的信用卡資訊。',
    'terms-sec-4-title': '4. 隱私權',
    'terms-sec-4-desc': '您的資料隱私對我們至關重要。關於我們如何處理您的個人資料（例如儲存於本機與 iCloud 的聯絡人資訊），請參閱我們的<a href="privacy.html">隱私權政策</a>。使用本服務即表示您同意該政策的規範。',
    'terms-sec-5-title': '5. 智慧財產權',
    'terms-sec-5-desc': 'KinCue 應用程式及其包含的所有內容、設計、程式碼與商標，其智慧財產權均歸本開發團隊所有。未經書面許可，您不得複製、修改、散布或對應用程式進行還原工程（Reverse Engineering）。',
    'terms-sec-6-title': '6. 免責聲明',
    'terms-sec-6-desc': '本應用程式是依「現況」及「現有」基礎提供。我們不對 App 的適用性、可靠性或資料不遺失提供任何明示或暗示的保證。您需自行承擔使用本服務的風險，建議您定期將資料備份至 iCloud。',
    'terms-sec-7-title': '7. 責任限制',
    'terms-sec-7-desc': '在法律允許的最大範圍內，對於因使用或無法使用本服務所導致的任何間接、附帶、特殊或衍生性損害（包含但不限於資料遺失或業務中斷），KinCue 概不負責。',
    'terms-sec-8-title': '8. 聯絡我們',
    'terms-sec-8-desc': '如果您對本使用條款有任何疑問，或需要協助，請透過 App Store 頁面的「App 支援」或寄送電子郵件至 kincue.app@gmail.com 與我們聯繫。',

    // Footer
    'footer-support': '客服支援',
    'footer-terms': '使用條款',
    'footer-privacy': '隱私權政策',
    'footer-copyright': '© 2026 KinCue. All rights reserved.',
    
    'pricing-free-title': '免費版',
    'pricing-free-price': '$0',
    'pricing-free-period': '/ 永久',
    'pricing-free-desc': '適合開始建立家人互動習慣的您',
    'pricing-free-f1': '最多 4 位',
    'pricing-free-f2': '基本聯絡提醒',
    'pricing-free-f3': '基本話題提示',
    'pricing-free-f4': '查看、搜尋與篩選',
    'pricing-free-f5': '基本年度摘要',
    'pricing-free-f6': '不包含',
    
    'pricing-pro-title': 'KinCue+',
    'pricing-pro-price': '$120',
    'pricing-pro-period': '/ 月',
    'pricing-pro-price-yearly': '$790',
    'pricing-pro-period-yearly': '/ 年',
    'pricing-pro-desc': '解鎖所有進階功能，更全面地維繫關係',
    'pricing-pro-f1': '不限人數',
    'pricing-pro-f2': '日期、時段與後續提醒',
    'pricing-pro-f3': '喜好、重要日與自訂話題',
    'pricing-pro-f4': '查看、搜尋與篩選',
    'pricing-pro-f5': '趨勢、跨年比較與分享',
    'pricing-pro-f6': '製作、儲存與分享',

    // Versions
    'versions-section-title': '版本資訊',
    'version-1-1-0-title': '版本 1.1.0',
    'version-1-1-0-date': '2026年8月',
    'version-1-1-0-feat-1': '全新「日曆」分頁：新增獨立的日曆標籤頁，支援月、週、日視圖切換，過去的紀錄與未來的排程一目了然。',
    'version-1-1-0-feat-2': '互動統計與洞察 (KinCue+ 專屬)：新增互動統計面板、最常聯繫排行榜與聯繫方式圓餅圖，幫助您看懂聯繫節奏。',
    'version-1-1-0-feat-3': '介面與體驗優化：可以在日曆中直接編輯紀錄，並加入自訂聯絡方式圖示，讓畫面更加直觀。',
    'version-1-0-2-title': '版本 1.0.2',
    'version-1-0-2-date': '2026年8月',
    'version-1-0-2-feat-1': '功能增強：優化「智慧提醒」邏輯，現在能更聰明地處理特定節日（如母親節、父親節）並合併相關提醒，提供更貼心的互動建議（Plus 專屬）。',
    'version-1-0-2-feat-2': '穩定性提升：強化 iCloud 備份與同步機制，改善網路延遲時的讀取穩定性，確保您的珍貴回憶安全無虞。',
    'version-1-0-2-feat-3': '介面優化：在「設定」中新增智慧提醒的偏好選項，並完成各項細節與多國語系的更新。',
    'version-1-0-1-title': '版本 1.0.1',
    'version-1-0-1-date': '2026年8月',
    'version-1-0-1-feat-1': '優化聯絡人卡片與桌面小工具的資訊呈現',
    'version-1-0-1-feat-2': '修正 KinCue+ 訂閱權益顯示問題',
    'version-1-title': '版本 1.0.0',
    'version-1-date': '2026年8月',
    'version-1-desc': 'KinCue 正式上線！包含互動時間軸、關心提醒以及桌面小工具等核心功能，幫助您與家人保持緊密聯繫。',
  },
  'en': {
    // Navbar
    'nav-features': 'Features',
    'nav-pricing': 'Pricing',
    'nav-guide': 'User Guide',
    'nav-versions': 'Release Notes',
    'nav-contact': 'Support',
    'nav-privacy': 'Privacy Policy',

    // Hero
    'hero-title': 'The best relationships<br>start with remembering.',
    'hero-subtitle': 'KinCue is a beautifully designed family relationship tracker. We help you log every call and meetup, gently reminding you to stay in touch.',
    'hero-download': 'Download on App Store',
    'hero-learn-more': 'Learn More',

    // Features
    'features-section-title': 'A Journey to Better Family Relationships',
    
    'feature-1-title': 'Relationship Dashboard, Master Your Daily Rhythm',
    'feature-1-desc': 'See your "Today\'s Rhythm" and "Priority Contacts" as soon as you open the app. Quickly know who to contact today and turn keeping in touch into an effortless daily habit.',
    
    'feature-2-title': 'Exclusive Profiles, Remember Every Detail',
    'feature-2-desc': 'More than just a contact list. KinCue lets you log clothing sizes, favorite foods, allergies, and gift inspirations, so every gift hits the mark and shows your deepest care.',
    
    'feature-3-title': 'Easily Add Contacts and Log Interactions',
    'feature-3-desc': 'Quickly add family members and log every call or meetup. With customizable contact icons, every interaction record becomes more vivid and intuitive.',

    'feature-4-title': 'New Calendar View, Interaction History at a Glance',
    'feature-4-desc': 'A brand new calendar tab with month, week, and day views. Past interaction logs and future reminders are clearly displayed, making it easy to review moments with your family.',

    'feature-5-title': 'Upgrade to KinCue+, Unlock Advanced Stats & Insights',
    'feature-5-desc': 'An exclusive statistics panel analyzes your interaction count, most contacted list, and contact method distribution. Help you understand your rhythm and maintain family bonds smarter.',

    'feature-6-title': 'Thoughtful Settings, Protect Your Privacy and Routine',
    'feature-6-desc': 'Set "Suitable Contact Times" to avoid disturbing your family\'s rest. With iCloud backup, your family memories are secure and give you peace of mind.',

    // Pricing
    'pricing-section-title': 'Compare Plans',
    'pricing-section-subtitle': 'See what\'s included in Free and KinCue+.',
    
    'billing-monthly': 'Monthly',
    'billing-yearly': 'Yearly',
    'billing-save': 'Save 45%',
    
    'comparison-title': 'Feature Comparison',
    'comp-feature': 'Feature',
    'comp-free': 'Free',
    'comp-pro': 'KinCue+',
    
    'feature-label-1': 'Important Contacts',
    'feature-label-2': 'Reminders',
    'feature-label-3': 'Relationship Info',
    'feature-label-4': 'Interactions',
    'feature-label-5': 'Year in Review',
    'feature-label-6': 'Memory Videos',
    'feature-value-no': 'Not included',
    'feature-value-1-free': 'Up to 4',
    'feature-value-1-pro': 'Unlimited',
    'feature-value-2-free': 'Basic reminders',
    'feature-value-2-pro': 'Dates, time slots<br>& follow-ups',
    'feature-value-3-free': 'Basic topics',
    'feature-value-3-pro': 'Preferences, key dates<br>& custom topics',
    'feature-value-4-free': 'View, search<br>& filter',
    'feature-value-4-pro': 'View, search<br>& filter',
    'feature-value-5-free': 'Basic yearly summary',
    'feature-value-5-pro': 'Trends, comparisons<br>& sharing',
    'feature-value-6-pro': 'Create, save<br>& share',
    
    'comp-cat-1': 'Important Contacts',
    'comp-item-1-1': 'Add important contacts',
    'comp-val-1-1-free': 'Up to 4',
    'comp-val-1-1-pro': 'Unlimited',
    'comp-item-1-2': 'Edit contact basic info',
    
    'comp-cat-2': 'Interaction Records',
    'comp-item-2-1': 'Add & view records',
    'comp-item-2-2': 'Search records',
    'comp-item-2-3': 'Sort & filter records',

    'comp-cat-3': 'Calendar View (New in 1.1.0)',
    'comp-item-3-1': 'Calendar views (Month/Week/Day)',
    'comp-item-3-2': 'Add, edit and delete in calendar',
    'comp-item-3-3': 'Custom contact method icons',
    'comp-item-3-4': 'Stats panel (interactions, people contacted)',
    'comp-item-3-5': 'Most contacted family leaderboard',
    'comp-item-3-6': 'Contact method pie chart insights',

    'comp-cat-4': 'Reminders',
    'comp-item-4-1': 'Basic cycle reminders',
    'comp-item-4-2': 'Early gentle reminders',
    'comp-item-4-3': 'Custom reminder dates & times',
    'comp-item-4-4': 'Birthday 7-day early reminder',
    'comp-item-4-5': 'Custom event reminders',
    'comp-item-4-6': 'Follow-up reminders',

    'comp-cat-5': 'Relationship Info',
    'comp-item-5-1': 'Basic topic prompts',
    'comp-item-5-2': 'Record preferences',
    'comp-item-5-3': 'Save gift inspirations',
    'comp-item-5-4': 'Create custom important dates',
    'comp-item-5-5': 'Custom conversation topics',

    'comp-cat-6': 'Year in Review',
    'comp-item-6-1': 'Basic annual summary',
    'comp-item-6-2': 'Monthly interaction trends',
    'comp-item-6-3': 'Contact method analysis',
    'comp-item-6-4': 'Annual highlights',
    'comp-item-6-5': 'Annual interaction timeline',
    'comp-item-6-6': 'Cross-year comparisons',
    'comp-item-6-7': 'Share Year in Review',

    'comp-cat-7': 'Memories',
    'comp-item-7-1': 'Create photo memories',
    'comp-item-7-2': 'Create memory videos',
    'comp-item-7-3': 'Save memory videos',
    'comp-item-7-4': 'Share memory videos',

    // Privacy Policy
    'privacy-title': 'Privacy Policy',
    'privacy-summary': 'KinCue does not require an account, and most relationship data stays on your device. This policy explains when data leaves your device and how you can manage it.',
    'privacy-effective-date': 'Effective Date: August 3, 2026',
    'privacy-sec-1-title': 'Data Stored on This Device',
    'privacy-sec-1-desc': 'Names, relationship information, phone numbers, important dates, preferences, notes, interaction records, and photos you add are stored in KinCue on this device, unless you actively export, delete, or back them up.',
    'privacy-sec-2-title': 'Permissions You Choose',
    'privacy-sec-2-desc': 'KinCue only uses the contacts you pick via the Apple contact picker, photos you select, and notification permissions for local reminders. You can change these permissions in the Settings app.',
    'privacy-sec-3-title': 'Optional iCloud Backup',
    'privacy-sec-3-desc': 'Manual backups are only created when requested and are stored in your private iCloud Drive space on your Apple account. KinCue does not keep copies on other servers.',
    'privacy-sec-4-title': 'Apple Subscriptions',
    'privacy-sec-4-desc': 'Purchases and payments are handled by Apple. KinCue only receives product information and verified subscription status, and does not access full payment card details.',
    'privacy-sec-5-title': 'Usage Analytics',
    'privacy-sec-5-desc': 'The release version uses Firebase Analytics to collect App instance IDs, coarse location derived from masked IP addresses, subscription products and purchase events, as well as interactions with the KinCue+ purchase and restore flow. These analytics events are linked to an app installation, but not to names, phone numbers, contacts, notes, photos, or relationship records. KinCue only uses this to understand feature usage and improve the App, not for advertising or cross-app tracking. Google retains event-level Analytics data according to the retention period set in the Firebase project.',
    'privacy-sec-6-title': 'App Diagnostics',
    'privacy-sec-6-desc': 'The release version uses Firebase Crashlytics to receive crash records and limited device, OS, App version, and diagnostic info. This data is not linked to your relationship records and is not used for advertising or tracking. Firebase typically retains crash reports for 90 days.',
    'privacy-sec-7-title': 'No Sale, No Ads, No Tracking',
    'privacy-sec-7-desc': 'KinCue does not sell or rent personal data, display third-party ads, or track you across other companies\' apps or websites. Apple provides iCloud and subscription services; Google provides the usage analytics and crash diagnostics mentioned above.',
    'privacy-sec-8-title': 'Retention and Deletion',
    'privacy-sec-8-desc': 'Local data is retained until you delete it or remove KinCue. Manual backups can be deleted from iCloud Drive, subscriptions can be managed in your Apple account, and any exports are controlled by you via the Apple sharing interface.',
    'privacy-sec-9-title': 'Questions and Your Rights',
    'privacy-sec-9-desc': 'KinCue has no account system and does not receive your relationship records, so you can delete data directly on your device and iCloud Drive. If you have privacy questions, please use the "App Support" link on the KinCue App Store page.',

    // Terms of Use
    'terms-title': 'Terms of Use',
    'terms-summary': 'Welcome to KinCue! To protect your rights, please read these Terms of Use carefully before using our service. By downloading or using KinCue, you agree to these terms.',
    'terms-effective-date': 'Effective Date: August 3, 2026',
    'terms-sec-1-title': '1. Acceptance of Terms',
    'terms-sec-1-desc': 'These Terms of Use constitute a legal agreement between you and the KinCue development team. If you do not agree, do not install or use the App. We reserve the right to modify these terms at any time.',
    'terms-sec-2-title': '2. Description of Service',
    'terms-sec-2-desc': 'KinCue is an app to help you track family relationships and interactions. We strive to provide a stable service but cannot guarantee it will be uninterrupted or error-free. We reserve the right to modify, suspend, or terminate the service.',
    'terms-sec-3-title': '3. Subscriptions (KinCue+)',
    'terms-sec-3-desc': 'We offer a premium subscription (KinCue+). All billing, cancellations, and refunds are handled by the Apple App Store. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.',
    'terms-sec-4-title': '4. Privacy',
    'terms-sec-4-desc': 'Your data privacy is critical. Please see our <a href="privacy.html">Privacy Policy</a> to understand how we handle your personal data. By using this service, you agree to the policy.',
    'terms-sec-5-title': '5. Intellectual Property',
    'terms-sec-5-desc': 'The KinCue App and all its content, design, and code are owned by our development team. You may not copy, modify, distribute, or reverse engineer the App without written permission.',
    'terms-sec-6-title': '6. Disclaimer of Warranties',
    'terms-sec-6-desc': 'The App is provided on an "as is" and "as available" basis. We make no warranties regarding suitability, reliability, or data preservation. You use the service at your own risk.',
    'terms-sec-7-title': '7. Limitation of Liability',
    'terms-sec-7-desc': 'To the maximum extent permitted by law, KinCue shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the service.',
    'terms-sec-8-title': '8. Contact Us',
    'terms-sec-8-desc': 'If you have any questions about these Terms of Use, please contact us via "App Support" on the App Store or email us at kincue.app@gmail.com.',

    // Footer
    'footer-support': 'Support',
    'footer-terms': 'Terms of Use',
    'footer-privacy': 'Privacy Policy',
    'footer-copyright': '© 2026 KinCue. All rights reserved.',

    'pricing-free-title': 'Free',
    'pricing-free-price': '$0',
    'pricing-free-period': '/ forever',
    'pricing-free-desc': 'Perfect for building a habit of connection',
    'pricing-free-f1': 'Up to 4',
    'pricing-free-f2': 'Basic contact reminders',
    'pricing-free-f3': 'Basic topic prompts',
    'pricing-free-f4': 'View, search and filter',
    'pricing-free-f5': 'Basic annual summary',
    'pricing-free-f6': 'Not included',
    
    'pricing-pro-title': 'KinCue+',
    'pricing-pro-price': '$120',
    'pricing-pro-period': '/ month',
    'pricing-pro-price-yearly': '$790',
    'pricing-pro-period-yearly': '/ year',
    'pricing-pro-desc': 'Unlock all advanced features for deeper connections',
    'pricing-pro-f1': 'Unlimited',
    'pricing-pro-f2': 'Date, time period & follow-up reminders',
    'pricing-pro-f3': 'Preferences, key dates & custom topics',
    'pricing-pro-f4': 'View, search and filter',
    'pricing-pro-f5': 'Trends, cross-year compare & share',
    'pricing-pro-f6': 'Create, save and share',

    // Versions
    'versions-section-title': 'Release Notes',
    'version-1-1-0-title': 'Version 1.1.0',
    'version-1-1-0-date': 'August 2026',
    'version-1-1-0-feat-1': 'New "Calendar" Tab: A dedicated calendar tab with month, week, and day views. Past logs and future schedules are clear at a glance.',
    'version-1-1-0-feat-2': 'Stats & Insights (KinCue+ Exclusive): Added interaction stats panel, most contacted list, and pie charts to help you understand your connection rhythm.',
    'version-1-1-0-feat-3': 'UI & Experience Optimized: Directly edit records in the calendar, and added custom contact method icons for a more intuitive interface.',
    'version-1-0-2-title': 'Version 1.0.2',
    'version-1-0-2-date': 'August 2026',
    'version-1-0-2-feat-1': 'Enhanced Features: Upgraded "Smart Reminders" logic to intelligently handle specific holidays and merge related events for better interaction suggestions (Exclusive to Plus).',
    'version-1-0-2-feat-2': 'Improved Stability: Strengthened iCloud backup and synchronization mechanisms to ensure better reliability during network latency, keeping your precious memories safe.',
    'version-1-0-2-feat-3': 'UI Enhancements: Added new preference options for Smart Reminders in Settings, along with minor bug fixes and localization updates.',
    'version-1-0-1-title': 'Version 1.0.1',
    'version-1-0-1-date': 'August 2026',
    'version-1-0-1-feat-1': 'Optimized information display on contact cards and home screen widgets.',
    'version-1-0-1-feat-2': 'Fixed KinCue+ subscription benefits display issues.',
    'version-1-title': 'Version 1.0.0',
    'version-1-date': 'August 2026',
    'version-1-desc': 'KinCue is officially live! Includes core features like interaction timelines, gentle reminders, and home screen widgets to help you stay close to your family.',

    // Footer
    'footer-rights': '© 2026 KinCue. All rights reserved.',
    'footer-support': 'Support',
    'footer-terms': 'Terms of Use',
    'footer-privacy': 'Privacy Policy',

    // Guide page
    'g-meta-title': 'KinCue - User Guide',
    'g-meta-desc': 'The KinCue 1.1.0 user guide, covering the home screen, contact management, interaction logging, reminders, calendar, year in review, and KinCue+ features.',
    'g-h1': 'KinCue User Guide',
    'g-intro': 'A simple, intuitive companion for staying close to the people you want to remember. This guide is based on KinCue 1.1.0 and covers how to use every major feature, marking clearly which ones are free and which are exclusive to a KinCue+ subscription.',
    'g-tag-free': 'Free',
    'g-tag-plus': 'KinCue+ Exclusive',
    'g-label-free': 'Free:',

    'g-toc-1': 'About KinCue',
    'g-toc-2': 'Free vs KinCue+ Overview',
    'g-toc-3': 'First Launch & Onboarding',
    'g-toc-4': 'Home: Who to Contact Today',
    'g-toc-5': 'Managing Contacts',
    'g-toc-6': 'Logging Interactions',
    'g-toc-7': 'Reminders & Notifications',
    'g-toc-8': 'Get to Know Them Better (KinCue+)',
    'g-toc-9': 'Cherished Memories: Albums & Videos',
    'g-toc-10': 'Calendar: Month, Week View & Stats',
    'g-toc-11': 'Year in Review',
    'g-toc-13': 'Home Screen Widget & Siri',
    'g-toc-14': 'Settings',
    'g-toc-15': 'KinCue+ Subscription',
    'g-toc-16': 'Privacy & Data Security',

    'g-s1-h2': 'About KinCue',
    'g-s1-p1': 'KinCue is an iOS app that helps you stay close to your parents and family. The idea is simple: log every call, meal, video chat, or message, and KinCue gently reminds you when it\'s time to reach out again, based on the contact cadence you set.',
    'g-s1-p2': '<strong>KinCue requires no account.</strong> All contact data and interaction records live only on your device — data is only written to your own private iCloud space when you actively turn on Backup.',

    'g-s2-h2': 'Free vs KinCue+ Feature Overview',
    'g-s2-intro': 'For a quick comparison, the same table is also available in the app under Settings → KinCue+ → Subscription, highlighting your current plan in real time.',
    'g-s2-th1': 'Feature',
    'g-s2-th2': 'Free',
    'g-s2-th3': 'KinCue+',
    'g-s2-r1-feat': 'Number of important contacts',
    'g-s2-r1-free': 'Up to 4',
    'g-s2-r1-pro': 'Unlimited',
    'g-s2-r2-feat': 'Contact cadence',
    'g-s2-r2-free': 'Basic contact cadence & reminders',
    'g-s2-r2-pro': 'Preferred contact windows, key date reminders, follow-up tracking, smart merged reminders',
    'g-s2-r3-feat': 'Interaction records (timeline)',
    'g-s2-r3-free': 'View, add, filter',
    'g-s2-r3-pro': 'Same as Free',
    'g-s2-r4-feat': 'Get to know them better (preferences, gifts, topics)',
    'g-s2-r4-free': 'Basic conversation topic prompts',
    'g-s2-r4-pro': 'Fully unlocked',
    'g-s2-r5-feat': 'Photo albums / Memory videos',
    'g-s2-r5-free': 'Albums available',
    'g-s2-r5-pro': 'Create, save & share memory videos',
    'g-s2-r6-feat': 'Calendar views',
    'g-s2-r6-free': 'Month, week & day views with filters',
    'g-s2-r6-pro': 'Same, plus a full set of stats',
    'g-s2-r7-feat': 'Year in Review',
    'g-s2-r7-free': 'Basic yearly interaction count',
    'g-s2-r7-pro': 'Trend charts, year-over-year comparison, highlights, sharing',
    'g-s2-r9-feat': 'iCloud backup, widget, Siri shortcuts',
    'g-s2-r9-free': 'Available',
    'g-s2-r9-pro': 'Available',
    'g-s2-note': 'Want a quick comparison? The app\'s Home → Settings → KinCue+ → Subscription screen has the same table, with a live comparison against your current plan.',

    'g-s3-h2': 'First Launch & Onboarding',
    'g-s3-p1': 'The first time you open KinCue, the app walks you through a few screens explaining what it can do, at your own pace, and finishes by asking for notification permission (so it can remind you at the right moments). Onboarding also ends with a table that makes clear what\'s different between Free and KinCue+, helping you decide whether to subscribe. You can also choose "Skip for now" and subscribe anytime later from Settings.',
    'g-img-07-alt': 'Free vs KinCue+ plan comparison screen shown during first launch',
    'g-cap-07': 'Plan comparison screen',
    'g-s3-note': 'The entire onboarding flow is available.',

    'g-s4-h2': 'Home: Who to Contact Today',
    'g-s4-p1': 'Home is KinCue\'s default screen. The "Today\'s Rhythm" card at the top uses Due, Coming Up, and Recently Updated counts to show at a glance who to reach out to today; your full contact list follows below — filterable by All Contacts or Due for Contact, with a quick cadence switcher.',
    'g-img-01-alt': 'Home screen',
    'g-cap-01': 'Home screen',
    'g-s4-note': 'The full Home screen experience is available (showing a rhythm overview for up to 4 contacts).',

    'g-s5-h2': 'Managing Contacts',
    'g-s5-h3-1': 'Add a Contact',
    'g-s5-p1': 'Tap "Add" in the top-right corner of Home, enter a name, choose a relationship (Mom, Sister, Close Friend… or a custom one), and optionally fill in a phone number, message recipient, birthday, and contact cadence (1–365 days by default). You can also import contact info directly from your phone\'s address book.',
    'g-img-05-alt': 'Add contact screen',
    'g-cap-05': 'Add contact',
    'g-s5-h3-2': 'Contact Detail Page',
    'g-s5-p2': 'Tap into any contact to see their basic info alongside a "Relationship Health" card that uses a plant-growth metaphor (e.g. "Flourishing · Growing Strong") to show how connected you\'ve stayed, along with days since last contact, contact cadence, and interaction count. Scroll down for conversation topic prompts, the interaction timeline, and expansion cards like "Get to Know Them Better," "Share Memories," and "Sync to Social."',
    'g-img-04-alt': 'Contact detail page',
    'g-cap-04': 'Contact detail page',
    'g-s5-h3-3': 'Free Plan Contact Limit',
    'g-s5-p3': 'The Free plan allows up to <strong>4</strong> important contacts. Adding a 5th contact takes you straight to the KinCue+ upgrade screen, explaining "Unlimited contacts, for the people who matter most."',
    'g-img-24-alt': 'Upgrade prompt shown when adding a 5th contact on the Free plan',
    'g-cap-24': 'Upgrade prompt for a 5th contact on Free',
    'g-s5-cmp-free': 'Adding, editing, and deleting contacts are all available (up to <strong>4</strong>).',
    'g-s5-cmp-plus': 'Removes the contact limit — add everyone you care about.',

    'g-s6-h2': 'Logging Interactions',
    'g-s6-h3-1': 'Add an Interaction',
    'g-s6-p1': 'On a contact\'s detail page, tap "Log Interaction," choose a method (call, FaceTime video/audio, in person, message…), fill in the time, outcome, and notes, and optionally add other family members who joined in. For calls, use "Quick Log" to add a 15-minute phone log with one tap instead of filling out the full form.',
    'g-img-08-alt': 'Add interaction screen',
    'g-cap-08': 'Add interaction',
    'g-s6-h3-2': 'Interaction Timeline & Filters',
    'g-s6-p2': 'Every contact has their own "Interaction Timeline" — a complete, time-sorted record that supports filtering by method, date range, contact channel, and note keywords, plus grouping by year or month.',
    'g-img-09-alt': 'Interaction timeline',
    'g-cap-09': 'Interaction timeline',
    'g-s6-cmp-free': 'Adding, editing, and deleting interactions, plus viewing, searching, sorting, and filtering the timeline are all available (same as KinCue+).',
    'g-s6-cmp-plus': 'Fully available, same as Free.',

    'g-s7-h2': 'Reminders & Notifications',
    'g-s7-h3-1': 'Basic Contact Reminders (Free)',
    'g-s7-p1': 'Set a "contact cadence" for each person (e.g. every 7 days) and KinCue sends a local notification the day it\'s due, letting you know it\'s time to reach out. The app also ships with preset cadence templates for kids, spouses, and parents.',
    'g-s7-h3-2': 'Advanced Reminders (KinCue+)',
    'g-s7-p2': 'Under Settings → KinCue+ → Good Times to Connect, you can:',
    'g-s7-li1': 'Set "preferred contact windows" so reminders only arrive on certain days or times, avoiding your family\'s rest time or early study hours.',
    'g-s7-li2': 'Turn on "Smart Merge" to automatically combine multiple pending reminders within 7 days, so you\'re not overwhelmed.',
    'g-s7-li3': 'Get "key date reminders" (anniversaries, checkups, etc., pulled from the important dates you set under "Get to Know Them Better").',
    'g-s7-li4': 'Get "follow-up reminders" that check in after a missed call and ask whether you\'d like to reschedule.',
    'g-img-17-alt': 'KinCue+ advanced reminder settings screen',
    'g-cap-17': 'Advanced reminder settings',
    'g-s7-p3': 'Tapping the advanced entry on the Free plan takes you straight to the upgrade prompt:',
    'g-img-18-alt': 'Upgrade screen shown when a Free plan user taps advanced reminders',
    'g-cap-18': 'Free plan upgrade prompt',
    'g-s7-cmp-free': 'Cadence reminders (for kids, spouses, and parents).',
    'g-s7-cmp-plus': 'Preferred contact windows, smart merged reminders, key date reminders, follow-up reminders.',

    'g-s8-h2': 'Get to Know Them Better (KinCue+)',
    'g-s8-p1': 'Scroll down on a contact\'s detail page to find the "Get to Know Them Better" card, built for remembering the small details that make your care feel personal:',
    'g-s8-li1': '<strong>Preferences & gift ideas</strong>: clothing size, favorite foods, things they\'ve mentioned wanting, hobbies, gift inspiration.',
    'g-s8-li2': '<strong>Key dates</strong>: anniversaries, checkups, and more (with yearly recurrence and days-ahead reminder settings).',
    'g-s8-li3': '<strong>Conversation topic library</strong>: build a topic library with a customizable number of topics (recent chats, things to bring up, casual topics).',
    'g-s8-p2': 'On the Free plan you\'ll only see basic default topic prompts, with an upgrade promo below the card. KinCue+ subscribers can fully edit this card.',
    'g-img-10-alt': 'Locked "Get to Know Them Better" card on the Free plan',
    'g-cap-10': 'Free plan (locked)',
    'g-img-11-alt': 'Unlocked "Get to Know Them Better" card on KinCue+',
    'g-cap-11': 'KinCue+ (unlocked)',
    'g-img-11a-alt': 'Full topic library shown after tapping "View all"',
    'g-cap-11a': 'Topic library (view all)',
    'g-s8-cmp-free': 'Only basic conversation topic prompts are shown.',
    'g-s8-cmp-plus': 'Full access to preferences & gift ideas, key dates, and a custom topic library.',

    'g-s9-h2': 'Cherished Memories: Photo Albums & Memory Videos',
    'g-s9-h3-1': 'Photo Albums (Free)',
    'g-s9-p1': 'Add photos to an interaction log and KinCue automatically organizes them into that contact\'s photo album. You can also manually adjust the album\'s name, cover photo, and included pictures.',
    'g-img-12-alt': 'Photo album',
    'g-cap-12': 'Photo album',
    'g-s9-h3-2': 'Memory Videos (KinCue+)',
    'g-s9-p2': 'Tap "Create Memory Video" in an album, choose up to 15 photos, pick a theme (Warm, Joyful, Grateful, Peaceful) and background music, and KinCue automatically generates a short video with transitions and text — playable and saveable in your video library, and ready to save to your phone and share with family. Both video and music are generated entirely on-device, so no family photos are ever uploaded.',
    'g-s9-cmp-free': 'Organizing, browsing, and editing photo albums is fully available.',
    'g-s9-cmp-plus': 'Create, save, and share memory videos.',

    'g-s10-h2': 'Calendar: Month, Week View & Stats',
    'g-s10-p1': 'The Calendar tab lets you switch between month and week views, showing each day\'s interactions along with upcoming events like contact cadences that are about to come due. Tap a date to see interactions logged that day.',
    'g-img-02-alt': 'Calendar month view',
    'g-cap-02': 'Month view',
    'g-img-15-alt': 'Calendar week view (available on the Free plan)',
    'g-cap-15': 'Week view (available on Free)',
    'g-s10-h3': 'KinCue+ Stats Panel',
    'g-s10-p2': 'KinCue+ subscribers get an extra stats button in the top-right corner of the calendar. Tap it to see "total interactions," "people contacted," "most contacted person," and a breakdown by contact method — a fuller picture of your habits.',
    'g-img-16-alt': 'KinCue+ calendar stats page',
    'g-cap-16': 'Calendar stats page',
    'g-s10-cmp-free': 'Month, week, and day views are all available.',
    'g-s10-cmp-plus': 'Adds full stats and insights (interaction overview, most contacted, contact method breakdown).',

    'g-s11-h2': 'Year in Review',
    'g-s11-p1': 'Tap "Year in Review" on a contact\'s detail page to switch between years and see a full year of interaction stats with that person. On the Free plan you\'ll only see a basic yearly interaction count, plus an "Unlock full Year in Review" button. KinCue+ subscribers unlock the complete yearly data, including a monthly interaction trend chart, comparisons with last year, most common contact method, growth milestones and other yearly highlights, plus recent cherished moments and a timeline — with the option to choose what to include and share it as a year-in-review recap.',
    'g-img-13-alt': 'Basic yearly interaction summary on the Free plan',
    'g-cap-13': 'Free plan (basic summary)',
    'g-img-14-alt': 'Full KinCue+ Year in Review data',
    'g-cap-14': 'KinCue+ (full data)',
    'g-img-14a-alt': 'Full KinCue+ Year in Review data (scrolled down)',
    'g-cap-14a': 'KinCue+ (full data, cont.)',
    'g-s11-cmp-free': 'Basic yearly interaction count.',
    'g-s11-cmp-plus': 'Trend charts, year-over-year comparison, annual highlights, timeline, and sharing.',

    'g-s13-h2': 'Home Screen Widget & Siri Shortcuts',
    'g-s13-li1': '<strong>Home screen widget</strong>: add it to your Home Screen to see "who to contact today" — the number of people due for contact plus one suggested person, with quick "Contact" and "Record" buttons.',
    'g-s13-li2': '<strong>Siri Shortcuts / App Intents</strong>: use the "Log Interaction" shortcut to tell Siri who you contacted and how, logging an interaction without even opening the app.',
    'g-s13-note': 'Both the widget and Siri shortcuts are available, with no KinCue+ restrictions.',
    'g-img-25-alt': 'Small Home Screen widget',
    'g-cap-25': 'Small widget',
    'g-img-26-alt': 'Medium Home Screen widget',
    'g-cap-26': 'Medium widget',

    'g-s14-h2': 'Settings',
    'g-s14-p1': 'Tap the "Settings" tab at the bottom to manage:',
    'g-s14-li1': '<strong>App language / appearance</strong>: language and Light/Dark/System appearance, applied immediately.',
    'g-s14-li2': '<strong>iCloud backup</strong>: manually back up your contacts and interaction records to your own private iCloud (iCloud Drive/KinCue/KinCue Backup), and restore from a backup on a new device. Both backup and restore require you to be signed into iCloud in system settings.',
    'g-s14-li3': '<strong>Privacy & data</strong>: read the full privacy policy, which explains that data stays on-device and only reaches iCloud when you actively back it up.',
    'g-s14-li4': '<strong>Support & feedback</strong>: send a report or suggestion by email with one tap; it automatically includes your app version, iOS version, and device info for diagnostics.',
    'g-s14-li5': '<strong>KinCue+</strong>: check your current subscription status, compare plans, subscribe, or manage your subscription (see the next section).',
    'g-img-03-alt': 'Settings screen',
    'g-cap-03': 'Settings screen',
    'g-img-23-alt': 'iCloud backup settings',
    'g-cap-23': 'iCloud backup settings',
    'g-s14-note': 'All the settings above are available. The only difference is that entries like "Advanced Reminders" show an upgrade screen instead of the actual settings when tapped.',

    'g-s15-h2': 'KinCue+ Subscription',
    'g-s15-p1': 'You can reach the Subscription Center from Settings → KinCue+, or from any upgrade prompt in the app:',
    'g-s15-li1': 'Choose between a <strong>monthly</strong> or <strong>yearly</strong> plan — yearly is usually the better value (the app shows the discount and the per-month equivalent price), and eligible new subscribers can enjoy a free trial.',
    'g-s15-li3': 'Subscribed accounts show "This Apple ID is subscribed to KinCue+," with a "Manage Subscription" link straight to App Store subscription settings.',
    'g-s15-li4': '"Restore Purchases" lets you recover and restore your subscription with one tap after switching devices or reinstalling.',
    'g-s15-li5': 'Subscriptions are billed through your Apple account and renew automatically unless canceled at least 24 hours before the end of the current billing period.',
    'g-img-21-alt': 'Subscription Center (Free plan)',
    'g-cap-21': 'Subscription Center (Free)',
    'g-img-22-alt': 'Subscription Center (KinCue+ subscribed)',
    'g-cap-22': 'Subscription Center (KinCue+ subscribed)',

    'g-s16-h2': 'Privacy & Data Security',
    'g-s16-li1': 'KinCue requires no account — contact data, interaction records, and photos live only on your device.',
    'g-s16-li2': 'Data is only written to your own private iCloud space, under your own Apple account, when you actively turn on Backup. KinCue never keeps a copy on any other server.',
    'g-s16-li3': 'Subscription purchases and payments are handled by Apple; KinCue only receives your subscription status and verified subscription period.',
    'g-s16-li4': 'The release build uses Firebase Analytics and Crashlytics for anonymous usage stats and crash diagnostics. These are never linked to your name, contacts, notes, or photos, and are never used for advertising or cross-app tracking.',
    'g-s16-li5': 'KinCue never sells or shares your personal data, and never shows third-party ads.',
    'g-s16-p1': 'Read the full terms in the app under Settings → Privacy & Data → Privacy Policy, or see the <a href="privacy.html" style="color: var(--accent-color);">Privacy Policy</a> page on the website.',

    'g-footnote': 'This document is based on the English interface of KinCue 1.1.0; actual screens may vary slightly depending on your system version.',
  }
};

class I18n {
  constructor() {
    this.lang = localStorage.getItem('kincue-lang') || 'zh-TW';
    this.init();
  }

  init() {
    document.documentElement.lang = this.lang;
    this.updateContent();
    this.updateMeta();
    this.updateSwitcherUI();
    this.updateImages();
    this.updateLinks();
  }

  setLanguage(lang) {
    if (this.lang === lang) return;
    this.lang = lang;
    localStorage.setItem('kincue-lang', lang);
    document.documentElement.lang = lang;
    this.updateContent();
    this.updateMeta();
    this.updateSwitcherUI();
    this.updateImages();
    this.updateLinks();
  }

  updateMeta() {
    const metaDesc = document.querySelector('meta[name="description"][data-i18n-content]');
    if (metaDesc) {
      if (metaDesc.dataset.i18nContentOriginal === undefined) {
        metaDesc.dataset.i18nContentOriginal = metaDesc.getAttribute('content') || '';
      }
      const key = metaDesc.getAttribute('data-i18n-content');
      const value = translations[this.lang] && translations[this.lang][key];
      metaDesc.setAttribute('content', value || metaDesc.dataset.i18nContentOriginal);
    }
  }

  updateImages() {
    const images = {
      'img-hero-dashboard': '1_Home',
      'img-feature-dashboard': '1_Home',
      'img-feature-preferences': '4_ContactDetail',
      'img-feature-addcontact': '5_AddContact',
      'img-feature-calendar': '2_Calendar',
      'img-feature-stats': '6_Paywall',
      'img-feature-settings': '3_Settings'
    };
    const suffix = this.lang === 'en' ? '_en' : '';
    for (const [id, basename] of Object.entries(images)) {
      const img = document.getElementById(id);
      if (img) {
        img.src = `assets/${basename}${suffix}.png`;
      }
    }

    // Guide page screenshots: <img data-i18n-src="01-home" ...> -> assets/guide/01-home[_en].webp
    document.querySelectorAll('[data-i18n-src]').forEach(img => {
      const base = img.getAttribute('data-i18n-src');
      img.src = `assets/guide/${base}${suffix}.webp`;
    });

    // Guide page alt text, with the original zh-TW alt cached for restoring on switch-back
    document.querySelectorAll('[data-i18n-alt]').forEach(img => {
      if (img.dataset.i18nAltOriginal === undefined) {
        img.dataset.i18nAltOriginal = img.getAttribute('alt') || '';
      }
      const key = img.getAttribute('data-i18n-alt');
      const value = translations[this.lang] && translations[this.lang][key];
      img.alt = value || img.dataset.i18nAltOriginal;
    });
  }

  updateLinks() {
    const downloadLinks = document.querySelectorAll('a[data-i18n="hero-download"]');
    const appStoreUrl = this.lang === 'en' 
      ? 'https://apps.apple.com/tw/app/kincue-keep-in-touch/id6795072619?l=en-GB'
      : 'https://apps.apple.com/tw/app/kincue-keep-in-touch/id6795072619';
    downloadLinks.forEach(link => {
      link.href = appStoreUrl;
    });
  }

  updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      // Cache the element's original (zh-TW) markup once, so switching back
      // to a language with no dictionary entry for this key still restores it.
      if (el.dataset.i18nOriginal === undefined) {
        el.dataset.i18nOriginal = el.innerHTML;
      }
      const key = el.getAttribute('data-i18n');
      if (translations[this.lang] && translations[this.lang][key]) {
        // Use innerHTML to allow <br> and <strong> tags in translations
        el.innerHTML = translations[this.lang][key];
      } else {
        el.innerHTML = el.dataset.i18nOriginal;
      }
    });
  }

  updateSwitcherUI() {
    const switchers = document.querySelectorAll('.lang-switcher button');
    switchers.forEach(btn => {
      if (btn.dataset.lang === this.lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
  
  // Setup switcher event listeners
  const switchers = document.querySelectorAll('.lang-switcher button');
  switchers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.dataset.lang;
      window.i18n.setLanguage(lang);
      updatePricingDisplay();
    });
  });

  // Billing Toggle Logic
  const billingCheckbox = document.getElementById('billing-checkbox');
  const labelMonthly = document.getElementById('label-monthly');
  const labelYearly = document.getElementById('label-yearly');
  
  function updatePricingDisplay() {
    if (!billingCheckbox) return;
    const isYearly = billingCheckbox.checked;
    const lang = window.i18n.lang;
    const proPrice = document.getElementById('kincue-pro-price');
    const proPeriod = document.getElementById('kincue-pro-period');
    
    if (isYearly) {
      labelYearly.classList.add('active');
      labelMonthly.classList.remove('active');
      if(proPrice) proPrice.textContent = translations[lang]['pricing-pro-price-yearly'];
      if(proPeriod) proPeriod.textContent = translations[lang]['pricing-pro-period-yearly'];
    } else {
      labelMonthly.classList.add('active');
      labelYearly.classList.remove('active');
      if(proPrice) proPrice.textContent = translations[lang]['pricing-pro-price'];
      if(proPeriod) proPeriod.textContent = translations[lang]['pricing-pro-period'];
    }
  }

  if (billingCheckbox) {
    billingCheckbox.addEventListener('change', updatePricingDisplay);
  }
});

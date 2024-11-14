// التعامل مع البحث وعرض الاقتراحات
const searchBar = document.getElementById("search-bar");
const suggestionsList = document.getElementById("suggestions");

// إضافة اقتراحات مبدئية
const suggestions = [
    "برمجة المواقع",
    "دورة تعلم HTML",
    "أفضل لغات البرمجة",
    "تعلم CSS",
    "مراجعة JavaScript"
];

// تحديث قائمة الاقتراحات بناءً على النص المدخل
searchBar.addEventListener("input", function() {
    const query = searchBar.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query.length > 0) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement("li");
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
        });
    }
});

// تحميل ملف آمن
function downloadFile(url) {
    // تحقق من رابط الملف لمنع تحميل الملفات الضارة
    const safeUrls = [
        "example.com/file.zip" // إضافة المزيد من الروابط الآمنة هنا
    ];

    if (safeUrls.includes(url)) {
        window.location.href = url;
    } else {
        alert("الرابط غير آمن!");
    }
}
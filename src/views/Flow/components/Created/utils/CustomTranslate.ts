import translations from "@/views/Flow/components/Created/utils/Translations";


export default function CustomTranslate(template: string, replacements: any) {
    replacements = replacements || {};
    // Translate
    console.log('翻以前',template)
    template = translations[template] || template;
    console.log('翻以后',template)
    // Replace
    return template.replace(/{([^}]+)}/g, function (_, key) {
        return replacements[key] || '{' + key + '}';
    });
}
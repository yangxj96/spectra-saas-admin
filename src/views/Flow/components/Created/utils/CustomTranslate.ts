import translations from "@/views/Flow/components/Created/utils/Translations";


export default function CustomTranslate(template: string, replacements: any) {
    replacements = replacements || {};
    // Translate
    template = translations[template] || template;
    // Replace
    return template.replace(/{([^}]+)}/g, function (_, key) {
        return replacements[key] || '{' + key + '}';
    });
}
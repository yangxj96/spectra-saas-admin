import translations from "@/plugin/bpmnjs/translations";

export default function (template, replacements) {
    replacements = replacements || {};

    // Translate
    template = translations[template] || template;

    // Replace
    return template.replace(/{([^}]+)}/g, function (_, key) {
        return replacements[key] || '{' + key + '}';
    });
}

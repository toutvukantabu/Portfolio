import {SkillModel} from "@/domain/model/skill/SkillModel";
import {Cloud, Code2, Cpu, Database, GitBranch, LucideIcon, Server, Shield, Terminal} from "lucide-react";
import i18n from "@/core/i18n";

const iconMap: Record<string, LucideIcon> = {
    database: Database,
    backend: Server,
    api: Code2,
    versioning: GitBranch,
    devops: Terminal,
    infrastructure: Cloud,
    automation: Cpu,
    security: Shield,
};

export class StrapiSkillRepository {
    static getSkills(): SkillModel[] {
        const translatedSkills = i18n.t("skills", { returnObjects: true });

        if (!Array.isArray(translatedSkills) || translatedSkills.length === 0) {
            return [];
        }

        return translatedSkills.map((skill) => ({
            icon: iconMap[skill.icon] || Database,
            title: skill.title,
            desc: skill.desc,
        }));
    }
}
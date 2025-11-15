import {httpClient} from "@/infrastructure/http/httpClient";
import {IHeroRepository} from "@/domain/hero/repositories/IHeroRepository";
import {toDomain} from "@/infrastructure/mapper/hero/toDomain";
import {HeroDTO} from "@/application/dto/HeroDTO";
import {Hero} from "@/domain/hero/entities/Hero";

export class StrapiHeroRepository implements IHeroRepository {
  async findByLocale(locale: string): Promise<Hero | null> {

    const response = await httpClient.get<{ data: HeroDTO }>(`/homes`, {
      params: {locale}
    });
    const dto = response.data.data;
    if (!dto) return null;

    return toDomain(dto);
  }
}
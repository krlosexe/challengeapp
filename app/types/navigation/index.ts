import {CategorieAndMenuType} from '@app/types/redux/menu';
import {MenuType} from '@app/types/redux/menu';

export type MenuScreenList = {
    MenuList: {
     categorie: CategorieAndMenuType
    };
    MenuDetail: {
        menu: MenuType,
        alldish: MenuType[],
        titleCategorie: string;
        isDrink?: boolean;
    };
};
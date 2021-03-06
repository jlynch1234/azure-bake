import {BaseUtility, IngredientManager} from '@azbake/core'

export class WebAppUtils extends BaseUtility {

    public create_profile(): string {

        let util = IngredientManager.getIngredientFunction("coreutils", this.context)
        const profile = util.create_resource_name("webapp", null, true);
        return profile;
    }

    public async get_resource_profile(): Promise<string> {
        let util = IngredientManager.getIngredientFunction("coreutils", this.context)
        const profile = this.create_profile();
        const rg = await util.resource_group();
        return `${rg}/${profile}`;
    }
}


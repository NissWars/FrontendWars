export class RewardItemView{
    constructor(
        public REWARD_ITEM_ID?: string,
        public AMOUNT_LEFT?: any,
        public REWARD_POINT_NEEDED?: any,
        public ITEM_NAME?: string,
        public DESCRIPTION?: string,
        public REDEMPTION_DEADLINE?: any,
        public CREATION_DATETIME?: Date,
        public CREATION_USER?: string,
        public LAST_UPDATE_DATETIME?: Date,
        public LAST_UPDATE_USER?: string
      ) {
      }

}
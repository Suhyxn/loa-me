export type Characters = {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
};

type ArmoriesProfilesStats = {
  Type: string;
  Value: string;
  Tooltip: Array<string>;
};

type ArmoriesProfilesTendencies = {
  Type: string;
  point: number;
  MaxPoint: number;
};

export type ArmoriesProfiles = {
  ArmoryProfile: {
    CharacterImage: string | null;
    ExpeditionLevel: number;
    PvpGradeName: string;
    TownLevel: number;
    TownName: string | null;
    Title: string | null;
    GuildMemberGrade: string | null;
    GuildName: string | null;
    UsingSkillPoint: number | null;
    TotalSkillPoint: number | null;
    Stats: ArmoriesProfilesStats[];
    Tendencies: ArmoriesProfilesTendencies;
    ServerName: string;
    CharacterName: string;
    CharacterLevel: number;
    CharacterClassName: string;
    ItemAvgLevel: string | number;
    ItemMaxLevel: string | number;
  };
};

type ArmoriesProfilesEquipment = {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
};

export type ArmoriesEquipments = ArmoriesProfilesEquipment[];

type ArmoriesProfileAvatar = {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  IsSet: boolean;
  IsInner: boolean;
  Tooltip: string;
};

export type ArmoriesProfileAvatars = ArmoriesProfileAvatar[];

type ArmoriesProfileEngraving = {
  Slot: number;
  Name: string;
  Icon: string;
  Tooltip: string;
};

type ArmoriesProfileEngravingEffect = {
  Icon: string;
  Name: string;
  Description: string;
};

export type ArmoriesProfileEngravings = {
  Engravings: ArmoriesProfileEngraving[];
  Effects: ArmoriesProfileEngravingEffect[];
};

type ArmoriesProfileCard = {
  Slot: number;
  Name: string;
  Icon: string;
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Tooltip: string;
};

type ArmoriesProfileCardEffectItem = {
  Name: string;
  Description: string;
};

export type ArmoriesProfileCards = {
  Cards: ArmoriesProfileCard[];
  Effects: {
    Index: 0;
    CardSlots: number[];
    Item: ArmoriesProfileCardEffectItem[];
  };
};

type ArmoriesProfileGem = {
  Slot: number;
  Name: string;
  Icon: string;
  Level: number;
  Grade: string;
  Tooltip: string;
};

export type ArmoriesProfileGems = {
  Gems: ArmoriesProfileGem[];
};

type ArmoriesProfileCollectibleMain = {
  Type: string;
  Icon: string;
  Point: number;
  MaxPoint: number;
  collectblePoints: ArmoriesProfileCollectibleSub[];
};

type ArmoriesProfileCollectibleSub = {
  PointName: string;
  Point: number;
  MaxPoint: number;
};

export type ArmoriesProfileCollectibles = {
  Collectibles: ArmoriesProfileCollectibleMain[];
};

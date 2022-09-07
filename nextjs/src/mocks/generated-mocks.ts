import { PeopleType, Query, StoryAttributesType, StoryType, TypeWithObjectsCount } from '../generated/graphql';

export const aPeopleType = (overrides?: Partial<PeopleType>): PeopleType => {
    return {
        birthDate: overrides && overrides.hasOwnProperty('birthDate') ? overrides.birthDate! : 'voluptatem',
        deathDate: overrides && overrides.hasOwnProperty('deathDate') ? overrides.deathDate! : 'sed',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sapiente',
        nationalityLabel: overrides && overrides.hasOwnProperty('nationalityLabel') ? overrides.nationalityLabel! : 'voluptates',
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        hello: overrides && overrides.hasOwnProperty('hello') ? overrides.hello! : 'explicabo',
        objectsPerType: overrides && overrides.hasOwnProperty('objectsPerType') ? overrides.objectsPerType! : [aTypeWithObjectsCount()],
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : [aStoryType()],
    };
};

export const aStoryAttributesType = (overrides?: Partial<StoryAttributesType>): StoryAttributesType => {
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'suscipit',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'a',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'non',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'officiis',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'earum',
    };
};

export const aStoryType = (overrides?: Partial<StoryType>): StoryType => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aStoryAttributesType(),
        counts: overrides && overrides.hasOwnProperty('counts') ? overrides.counts! : 8.86,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '35c04aa6-e479-4684-8f17-75faababf199',
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : aPeopleType(),
    };
};

export const aTypeWithObjectsCount = (overrides?: Partial<TypeWithObjectsCount>): TypeWithObjectsCount => {
    return {
        class: overrides && overrides.hasOwnProperty('class') ? overrides.class! : 'a',
        numberOfInstances: overrides && overrides.hasOwnProperty('numberOfInstances') ? overrides.numberOfInstances! : 'modi',
    };
};

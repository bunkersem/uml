
export class Entity {
	entityType: string;
	name: string;
	fields: EntityField[];
	methods: EntityMethod[];
}

export class EntityMethod {
	accessModifier: AccessModifier;
	name: string;
	type: string;
	arguments: EntityMethodArgument[];
};

export class EntityMethodArgument {
	type: string;
	name: string;
};

export class EntityField {
	accessModifier: AccessModifier;
	name: string;
	type: string;
};

export class AccessModifier {
	name: string;
	symbol: string;
};
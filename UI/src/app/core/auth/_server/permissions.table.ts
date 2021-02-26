export class PermissionsTable {
	public static permissions: any = [
        
        {
            id: 1,
            name: 'accessToAuthModule',
            level: 1,
            title: 'Users Management module'
        }, 
        {
            id: 2,
            name: 'canReadAuthData',
            level: 2,
            parentId: 2,
            title: 'Read'
        },
        {
            id: 3,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'Edit'
        },
        {
            id: 4,
            name: 'canDeleteAuthData',
            level: 2,
            parentId: 2,
            title: 'Delete'
        },
            ];
}

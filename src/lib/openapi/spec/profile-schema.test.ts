import { validateSchema } from '../validate';
import type { ProfileSchema } from './profile-schema';

test('profileSchema', () => {
    const data: ProfileSchema = {
        rootRole: {
            id: 1,
            type: 'root',
            name: 'Admin',
        },
        projects: ['default', 'secretproject'],
        subscriptions: ['productivity-report'],
        features: [
            { name: 'firstFeature', project: 'default' },
            { name: 'secondFeature', project: 'secretproject' },
        ],
    };

    expect(
        validateSchema('#/components/schemas/profileSchema', data),
    ).toBeUndefined();
});

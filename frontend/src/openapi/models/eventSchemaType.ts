/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * What [type](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#event-type-description) of event this is
 */
export type EventSchemaType =
    (typeof EventSchemaType)[keyof typeof EventSchemaType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EventSchemaType = {
    'application-created': 'application-created',
    'feature-created': 'feature-created',
    'feature-deleted': 'feature-deleted',
    'feature-updated': 'feature-updated',
    'feature-metadata-updated': 'feature-metadata-updated',
    'feature-variants-updated': 'feature-variants-updated',
    'feature-environment-variants-updated':
        'feature-environment-variants-updated',
    'feature-project-change': 'feature-project-change',
    'feature-archived': 'feature-archived',
    'feature-revived': 'feature-revived',
    'feature-import': 'feature-import',
    'feature-tagged': 'feature-tagged',
    'feature-tag-import': 'feature-tag-import',
    'feature-strategy-update': 'feature-strategy-update',
    'feature-strategy-add': 'feature-strategy-add',
    'feature-strategy-remove': 'feature-strategy-remove',
    'feature-type-updated': 'feature-type-updated',
    'feature-completed': 'feature-completed',
    'feature-uncompleted': 'feature-uncompleted',
    'strategy-order-changed': 'strategy-order-changed',
    'drop-feature-tags': 'drop-feature-tags',
    'feature-untagged': 'feature-untagged',
    'feature-stale-on': 'feature-stale-on',
    'feature-stale-off': 'feature-stale-off',
    'drop-features': 'drop-features',
    'feature-environment-enabled': 'feature-environment-enabled',
    'feature-environment-disabled': 'feature-environment-disabled',
    'strategy-created': 'strategy-created',
    'strategy-deleted': 'strategy-deleted',
    'strategy-deprecated': 'strategy-deprecated',
    'strategy-reactivated': 'strategy-reactivated',
    'strategy-updated': 'strategy-updated',
    'strategy-import': 'strategy-import',
    'drop-strategies': 'drop-strategies',
    'context-field-created': 'context-field-created',
    'context-field-updated': 'context-field-updated',
    'context-field-deleted': 'context-field-deleted',
    'project-access-added': 'project-access-added',
    'project-access-user-roles-updated': 'project-access-user-roles-updated',
    'project-access-group-roles-updated': 'project-access-group-roles-updated',
    'project-access-user-roles-deleted': 'project-access-user-roles-deleted',
    'project-access-group-roles-deleted': 'project-access-group-roles-deleted',
    'project-access-updated': 'project-access-updated',
    'project-created': 'project-created',
    'project-updated': 'project-updated',
    'project-deleted': 'project-deleted',
    'project-archived': 'project-archived',
    'project-revived': 'project-revived',
    'project-import': 'project-import',
    'project-user-added': 'project-user-added',
    'project-user-removed': 'project-user-removed',
    'project-user-role-changed': 'project-user-role-changed',
    'project-group-role-changed': 'project-group-role-changed',
    'project-group-added': 'project-group-added',
    'project-group-removed': 'project-group-removed',
    'role-created': 'role-created',
    'role-updated': 'role-updated',
    'role-deleted': 'role-deleted',
    'drop-projects': 'drop-projects',
    'tag-created': 'tag-created',
    'tag-deleted': 'tag-deleted',
    'tag-import': 'tag-import',
    'drop-tags': 'drop-tags',
    'tag-type-created': 'tag-type-created',
    'tag-type-deleted': 'tag-type-deleted',
    'tag-type-updated': 'tag-type-updated',
    'tag-type-import': 'tag-type-import',
    'drop-tag-types': 'drop-tag-types',
    'addon-config-created': 'addon-config-created',
    'addon-config-updated': 'addon-config-updated',
    'addon-config-deleted': 'addon-config-deleted',
    'db-pool-update': 'db-pool-update',
    'user-created': 'user-created',
    'user-updated': 'user-updated',
    'user-deleted': 'user-deleted',
    'drop-environments': 'drop-environments',
    'environment-import': 'environment-import',
    'environment-created': 'environment-created',
    'environment-updated': 'environment-updated',
    'environment-deleted': 'environment-deleted',
    'segment-created': 'segment-created',
    'segment-updated': 'segment-updated',
    'segment-deleted': 'segment-deleted',
    'group-created': 'group-created',
    'group-updated': 'group-updated',
    'group-deleted': 'group-deleted',
    'group-user-added': 'group-user-added',
    'group-user-removed': 'group-user-removed',
    'setting-created': 'setting-created',
    'setting-updated': 'setting-updated',
    'setting-deleted': 'setting-deleted',
    'client-metrics': 'client-metrics',
    'client-register': 'client-register',
    'pat-created': 'pat-created',
    'pat-deleted': 'pat-deleted',
    'public-signup-token-created': 'public-signup-token-created',
    'public-signup-token-user-added': 'public-signup-token-user-added',
    'public-signup-token-updated': 'public-signup-token-updated',
    'change-request-created': 'change-request-created',
    'change-request-discarded': 'change-request-discarded',
    'change-added': 'change-added',
    'change-discarded': 'change-discarded',
    'change-edited': 'change-edited',
    'change-request-rejected': 'change-request-rejected',
    'change-request-approved': 'change-request-approved',
    'change-request-approval-added': 'change-request-approval-added',
    'change-request-cancelled': 'change-request-cancelled',
    'change-request-sent-to-review': 'change-request-sent-to-review',
    'change-request-schedule-suspended': 'change-request-schedule-suspended',
    'change-request-applied': 'change-request-applied',
    'change-request-scheduled': 'change-request-scheduled',
    'change-request-scheduled-application-success':
        'change-request-scheduled-application-success',
    'change-request-scheduled-application-failure':
        'change-request-scheduled-application-failure',
    'change-request-configuration-updated':
        'change-request-configuration-updated',
    'api-token-created': 'api-token-created',
    'api-token-updated': 'api-token-updated',
    'api-token-deleted': 'api-token-deleted',
    'feature-favorited': 'feature-favorited',
    'feature-unfavorited': 'feature-unfavorited',
    'project-favorited': 'project-favorited',
    'project-unfavorited': 'project-unfavorited',
    'features-exported': 'features-exported',
    'features-imported': 'features-imported',
    'service-account-created': 'service-account-created',
    'service-account-deleted': 'service-account-deleted',
    'service-account-updated': 'service-account-updated',
    'feature-potentially-stale-on': 'feature-potentially-stale-on',
    'feature-dependency-added': 'feature-dependency-added',
    'feature-dependency-removed': 'feature-dependency-removed',
    'feature-dependencies-removed': 'feature-dependencies-removed',
    'banner-created': 'banner-created',
    'banner-updated': 'banner-updated',
    'banner-deleted': 'banner-deleted',
    'project-environment-added': 'project-environment-added',
    'project-environment-removed': 'project-environment-removed',
    'default-strategy-updated': 'default-strategy-updated',
    'segment-import': 'segment-import',
    'signal-endpoint-created': 'signal-endpoint-created',
    'signal-endpoint-updated': 'signal-endpoint-updated',
    'signal-endpoint-deleted': 'signal-endpoint-deleted',
    'signal-endpoint-token-created': 'signal-endpoint-token-created',
    'signal-endpoint-token-updated': 'signal-endpoint-token-updated',
    'signal-endpoint-token-deleted': 'signal-endpoint-token-deleted',
    'actions-created': 'actions-created',
    'actions-updated': 'actions-updated',
    'actions-deleted': 'actions-deleted',
    'release-plan-template-created': 'release-plan-template-created',
    'release-plan-template-updated': 'release-plan-template-updated',
    'release-plan-template-deleted': 'release-plan-template-deleted',
    'release-plan-template-archived': 'release-plan-template-archived',
    'release-plan-added': 'release-plan-added',
    'release-plan-removed': 'release-plan-removed',
    'release-plan-milestone-started': 'release-plan-milestone-started',
    'user-preference-updated': 'user-preference-updated',
    'scim-users-deleted': 'scim-users-deleted',
    'scim-groups-deleted': 'scim-groups-deleted',
} as const;

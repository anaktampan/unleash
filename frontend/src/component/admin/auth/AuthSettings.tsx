import {} from '@mui/material';
import { PageContent } from 'component/common/PageContent/PageContent';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import { OidcAuth } from './OidcAuth/OidcAuth';
import { SamlAuth } from './SamlAuth/SamlAuth';
import { ScimSettings } from './ScimSettings/ScimSettings';
import { PasswordAuth } from './PasswordAuth/PasswordAuth';
import { GoogleAuth } from './GoogleAuth/GoogleAuth';
import { PermissionGuard } from 'component/common/PermissionGuard/PermissionGuard';
import { ADMIN, UPDATE_AUTH_CONFIGURATION } from '@server/types/permissions';
import { PremiumFeature } from 'component/common/PremiumFeature/PremiumFeature';
import { Route, Routes, useLocation } from 'react-router-dom';
import { usePageTitle } from 'hooks/usePageTitle';
import { useUiFlag } from 'hooks/useUiFlag';

export const AuthSettings = () => {
    const { isEnterprise } = useUiConfig();
    const googleAuthEnabled = useUiFlag('googleAuthEnabled');

    const tabs = [
        {
            label: 'Single sign-on: OpenID Connect',
            path: '/admin/auth',
        },
        {
            label: 'Single sign-on: SAML 2.0',
            path: '/admin/auth/saml',
        },
        {
            label: 'Password login',
            path: '/admin/auth/password',
        },
        {
            label: 'Single sign-on: Google',
            path: '/admin/auth/google',
        },
        {
            label: 'Single sign-on: SCIM',
            path: '/admin/auth/scim',
        },
    ];
    const { pathname } = useLocation();
    const activeTab =
        tabs.find((tab) => pathname === tab.path)?.label ||
        'Single sign-on: OpenID Connect';

    usePageTitle(activeTab);

    if (!isEnterprise()) {
        return <PremiumFeature feature='sso' page />;
    }

    return (
        <div>
            <PermissionGuard permissions={[ADMIN, UPDATE_AUTH_CONFIGURATION]}>
                <PageContent header={activeTab}>
                    <Routes>
                        <Route path='/' element={<OidcAuth />} />
                        <Route path='/saml' element={<SamlAuth />} />
                        <Route path='/password' element={<PasswordAuth />} />
                        {googleAuthEnabled && (
                            <Route path='/google' element={<GoogleAuth />} />
                        )}
                        <Route path='/scim' element={<ScimSettings />} />
                    </Routes>
                </PageContent>
            </PermissionGuard>
        </div>
    );
};

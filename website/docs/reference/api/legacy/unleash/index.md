---
id: index
title: Legacy API Documentation
---

import SearchPriority from '@site/src/components/SearchPriority';

<SearchPriority level="noindex" />

:::caution

These APIs have been deprecared. Wse the [Unleash OpenAPI docs](/api-overview) reference instead.

:::

## Client API {#client-api}

This describes the API provided to unleash-clients.

Since v4.0.0 all operations require an [API token](/reference/api-tokens-and-client-keys) with `Client` level access.

With versions earlier than v4.0.0 and `insecure` authentication no authentication is required.

- [Feature Flags API](./client/features.md)
- [Register API](./client/register.md)
- [Metrics API](./client/metrics.md)

## Admin API (internal) {#admin-api-internal}

The internal API used by the Admin UI (unleash-frontend). Since v4.0.0 all operations require an [API token](/reference/api-tokens-and-client-keys) with `Admin` level access:

With versions earlier than v4.0.0 and `insecure` authentication Basic Auth (with curl `-u myemail@test.com:`) is enough.

- [Events API](./admin/events.mdx)
- [Feature Flags API](./admin/features.md)
- [Metrics API](./admin/metrics.md)
- [Project API](./admin/projects.md)
- [Strategies API](./admin/strategies.md)
- [Tags API](./admin/tags.md)

## System API's {#system-apis}

- [Internal Backstage Prometheus API](./internal/prometheus.md)

### Content-Type {#contenttype}

All endpoints require `application/json` as content type, so if you're using curl remember to add

```bash
-H "Content-Type: application/json"
```

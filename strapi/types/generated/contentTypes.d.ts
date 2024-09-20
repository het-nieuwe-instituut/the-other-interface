import type { Schema, Attribute } from '@strapi/strapi'

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    username: Attribute.String
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    name: 'Transfer Token'
    singularName: 'transfer-token'
    pluralName: 'transfer-tokens'
    displayName: 'Transfer Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    name: 'Transfer Token Permission'
    description: ''
    singularName: 'transfer-token-permission'
    pluralName: 'transfer-token-permissions'
    displayName: 'Transfer Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    singularName: 'release'
    pluralName: 'releases'
    displayName: 'Release'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    timezone: Attribute.String
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> &
      Attribute.Required
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    singularName: 'release-action'
    pluralName: 'release-actions'
    displayName: 'Release Action'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>
    contentType: Attribute.String & Attribute.Required
    locale: Attribute.String
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >
    isEntryValid: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale'
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1
          max: 50
        },
        number
      >
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions'
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    provider: Attribute.String
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginMuxVideoUploaderMuxAsset extends Schema.CollectionType {
  collectionName: 'muxassets'
  info: {
    name: 'mux-asset'
    description: 'Represents a Mux Asset item, including upload and playback details'
    displayName: 'Mux Asset'
    singularName: 'mux-asset'
    pluralName: 'mux-assets'
  }
  options: {
    increments: true
    timestamps: true
  }
  pluginOptions: {
    'content-manager': {
      visible: true
    }
    'content-type-builder': {
      visible: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
        maxLength: 255
      }>
    upload_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255
      }>
    asset_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255
      }>
    playback_id: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255
      }>
    signed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    error_message: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255
      }>
    isReady: Attribute.Boolean & Attribute.DefaultTo<false>
    duration: Attribute.Decimal
    aspect_ratio: Attribute.String
    asset_data: Attribute.JSON
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginMuxVideoUploaderMuxTextTrack extends Schema.CollectionType {
  collectionName: 'muxtexttracks'
  info: {
    name: 'mux-text-track'
    description: 'Temporary storage for user-defined subtitles & captions sent to Mux during video uploads'
    displayName: 'Mux Text Track'
    singularName: 'mux-text-track'
    pluralName: 'mux-text-tracks'
  }
  options: {
    increments: true
    timestamps: true
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    language_code: Attribute.String & Attribute.Required
    closed_captions: Attribute.Boolean & Attribute.Required
    file: Attribute.JSON & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-text-track',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::mux-video-uploader.mux-text-track',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors'
  info: {
    singularName: 'author'
    pluralName: 'authors'
    displayName: 'Author'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    firstName: Attribute.String & Attribute.Required
    insertion: Attribute.String
    lastName: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::author.author', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::author.author', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages'
  info: {
    singularName: 'homepage'
    pluralName: 'homepages'
    displayName: 'Homepage'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    highlightedThemes: Attribute.Relation<'api::homepage.homepage', 'oneToMany', 'api::theme.theme'>
    text: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    carousel: Attribute.Component<'modules.carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    grid: Attribute.Component<'modules.grid-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::homepage.homepage'
    >
    locale: Attribute.String
  }
}

export interface ApiLandingPageArchiveLandingPageArchive extends Schema.SingleType {
  collectionName: 'landing_page_archives'
  info: {
    singularName: 'landing-page-archive'
    pluralName: 'landing-page-archives'
    displayName: 'Landing page - archive'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    carousel: Attribute.Component<'modules.carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    highlight: Attribute.Component<'modules.highlight'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    grid: Attribute.Component<'modules.grid-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    imageCarousel: Attribute.Component<'modules.image-carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::landing-page-archive.landing-page-archive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::landing-page-archive.landing-page-archive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::landing-page-archive.landing-page-archive',
      'oneToMany',
      'api::landing-page-archive.landing-page-archive'
    >
    locale: Attribute.String
  }
}

export interface ApiLandingPageObjectLandingPageObject extends Schema.SingleType {
  collectionName: 'landing_page_objects'
  info: {
    singularName: 'landing-page-object'
    pluralName: 'landing-page-objects'
    displayName: 'Landing page - object'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    carousel: Attribute.Component<'modules.carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    highlight: Attribute.Component<'modules.highlight'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    grid: Attribute.Component<'modules.grid-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    imageCarousel: Attribute.Component<'modules.image-carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::landing-page-object.landing-page-object',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::landing-page-object.landing-page-object',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::landing-page-object.landing-page-object',
      'oneToMany',
      'api::landing-page-object.landing-page-object'
    >
    locale: Attribute.String
  }
}

export interface ApiLandingPagePeopleLandingPagePeople extends Schema.SingleType {
  collectionName: 'landing_page_peoples'
  info: {
    singularName: 'landing-page-people'
    pluralName: 'landing-page-peoples'
    displayName: 'Landing page - people'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    carousel: Attribute.Component<'modules.carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    highlight: Attribute.Component<'modules.highlight'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    grid: Attribute.Component<'modules.grid-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    imageCarousel: Attribute.Component<'modules.image-carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::landing-page-people.landing-page-people',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::landing-page-people.landing-page-people',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::landing-page-people.landing-page-people',
      'oneToMany',
      'api::landing-page-people.landing-page-people'
    >
    locale: Attribute.String
  }
}

export interface ApiLandingPagePublicationLandingPagePublication extends Schema.SingleType {
  collectionName: 'landing_page_publications'
  info: {
    singularName: 'landing-page-publication'
    pluralName: 'landing-page-publications'
    displayName: 'Landing page - publication'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    text: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    carousel: Attribute.Component<'modules.carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    highlight: Attribute.Component<'modules.highlight'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    grid: Attribute.Component<'modules.grid-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    imageCarousel: Attribute.Component<'modules.image-carousel'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::landing-page-publication.landing-page-publication',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::landing-page-publication.landing-page-publication',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::landing-page-publication.landing-page-publication',
      'oneToMany',
      'api::landing-page-publication.landing-page-publication'
    >
    locale: Attribute.String
  }
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations'
  info: {
    singularName: 'location'
    pluralName: 'locations'
    displayName: 'Location'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    stories: Attribute.Relation<'api::location.location', 'manyToMany', 'api::story.story'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::location.location', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::location.location', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::location.location',
      'oneToMany',
      'api::location.location'
    >
    locale: Attribute.String
  }
}

export interface ApiStoryStory extends Schema.CollectionType {
  collectionName: 'stories'
  info: {
    singularName: 'story'
    pluralName: 'stories'
    displayName: 'Story'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    components: Attribute.DynamicZone<
      [
        'modules.pullquote',
        'modules.text-module',
        'modules.subtitle',
        'modules.title-module',
        'modules.image-carousel',
        'modules.image',
        'modules.buttons-module',
        'core.stand-alone-link',
        'core.mux-audio',
        'core.mux-video',
        'modules.side-image-with-text',
        'modules.standalone-links'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    timeframe: Attribute.Component<'core.timeframe'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    locations: Attribute.Relation<'api::story.story', 'manyToMany', 'api::location.location'>
    publicationDate: Attribute.Component<'core.publication-date'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    storyLinks: Attribute.Component<'modules.buttons-module'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    shortDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 250
      }>
    triplyRecords: Attribute.Relation<
      'api::story.story',
      'manyToMany',
      'api::triply-record.triply-record'
    >
    themes: Attribute.Relation<'api::story.story', 'manyToMany', 'api::theme.theme'>
    child_stories: Attribute.Relation<'api::story.story', 'oneToMany', 'api::story.story'>
    parent_story: Attribute.Relation<'api::story.story', 'manyToOne', 'api::story.story'>
    authors: Attribute.Relation<'api::story.story', 'oneToMany', 'api::author.author'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::story.story', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::story.story', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::story.story', 'oneToMany', 'api::story.story'>
    locale: Attribute.String
  }
}

export interface ApiThemeTheme extends Schema.CollectionType {
  collectionName: 'themes'
  info: {
    singularName: 'theme'
    pluralName: 'themes'
    displayName: 'Theme'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    stories: Attribute.Relation<'api::theme.theme', 'manyToMany', 'api::story.story'>
    highlightedStories: Attribute.Relation<'api::theme.theme', 'oneToMany', 'api::story.story'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::theme.theme', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::theme.theme', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::theme.theme', 'oneToMany', 'api::theme.theme'>
    locale: Attribute.String
  }
}

export interface ApiTriplyRecordTriplyRecord extends Schema.CollectionType {
  collectionName: 'triply_records'
  info: {
    singularName: 'triply-record'
    pluralName: 'triply-records'
    displayName: 'Triply Record'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    recordId: Attribute.String & Attribute.Required
    type: Attribute.Enumeration<['Archive', 'Object', 'People', 'Publication', 'Media']> &
      Attribute.Required
    stories: Attribute.Relation<
      'api::triply-record.triply-record',
      'manyToMany',
      'api::story.story'
    >
    label: Attribute.String
    subject_collectionHighlights: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::triply-record.triply-record', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::triply-record.triply-record', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::mux-video-uploader.mux-asset': PluginMuxVideoUploaderMuxAsset
      'plugin::mux-video-uploader.mux-text-track': PluginMuxVideoUploaderMuxTextTrack
      'api::author.author': ApiAuthorAuthor
      'api::homepage.homepage': ApiHomepageHomepage
      'api::landing-page-archive.landing-page-archive': ApiLandingPageArchiveLandingPageArchive
      'api::landing-page-object.landing-page-object': ApiLandingPageObjectLandingPageObject
      'api::landing-page-people.landing-page-people': ApiLandingPagePeopleLandingPagePeople
      'api::landing-page-publication.landing-page-publication': ApiLandingPagePublicationLandingPagePublication
      'api::location.location': ApiLocationLocation
      'api::story.story': ApiStoryStory
      'api::theme.theme': ApiThemeTheme
      'api::triply-record.triply-record': ApiTriplyRecordTriplyRecord
    }
  }
}

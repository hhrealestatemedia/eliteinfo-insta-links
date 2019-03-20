import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('links', IndexPagePreview)
CMS.registerPreviewStyle('../pages/index.css')

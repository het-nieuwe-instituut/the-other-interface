import { isArray } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

const attachmentProxy = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = req.query.filename

  if (!filePath || !process.env.parsed.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 not found</h1>')
    res.end()
    return
  }

  if (isArray(filePath)) {
    // TODO: add support for multiple files
    return
  }
  const fileName = filePath.substring(filePath.lastIndexOf('/') + 1)

  res.setHeader('content-disposition', 'attachment; filename=' + fileName)

  request
    .get(process.env.parsed.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL + filePath)
    .on('error', function () {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<h1>404 not found</h1>')
      res.end()
      return
    })
    .pipe(res)
}

export default attachmentProxy

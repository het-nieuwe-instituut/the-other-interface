import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

const attachmentProxy = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = req.query.filename
  const path =
    process.env.parsed.NEXT_PUBLIC_ENV === 'local'
      ? process.env.parsed.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL + filePath
      : (filePath as string)

  if (!path || !process.env.parsed.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 not found</h1>')
    res.end()
    return
  }

  if (filePath instanceof Array) {
    // TODO: add support for multiple files
    throw new Error('Multiple files not supported')
  }
  const fileName = path.substring(path.lastIndexOf('/') + 1)

  res.setHeader('content-disposition', 'attachment; filename=' + fileName)

  request
    .get(path)
    .on('error', function () {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<h1>404 not found</h1>')
      res.end()
      return
    })
    .pipe(res)
}

export default attachmentProxy

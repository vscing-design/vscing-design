export function getFileExtension(filename: string) {
  if (!filename || filename.indexOf('.') === -1) {
    // 如果 filename 为空或不包含任何点号，则直接返回 undefined
    return undefined;
  }
  // 安全地提取文件扩展名
  const parts: string[] = filename.split('.');
  // 扩展名
  const extension = parts[parts.length - 1].toLowerCase();
  // 类型集合
  const mimeTypeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    txt: 'text/plain',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    // 添加更多文件类型映射
  };

  return mimeTypeMap[extension] || 'application/octet-stream';
}

// 文件转base64
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(e: any) {
      resolve(e.target.result);
    };
    reader.onerror = function(e: any) {
      reject(e.target.error);
    };
    reader.readAsDataURL(file);
  });
}

// 判断是否图片类型
export function checkImageType(file: File): boolean {
  return file.type.startsWith('image/');
};

// accept数组转字符串
export function acceptToString(accept: string[]): string {
  return accept.map((item) => {
    if (item.indexOf('/') > 0 || item.startsWith('.')) {
      return item;
    } else {
      return `.${item}`;
    }
  })
  .join(',');
};

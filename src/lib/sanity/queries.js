
            export const queries = {
              // Add queries for each schema type
            
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getPosts: `*[_type == "post"]`,
              getPostById: (id) => `*[_type == "post" && _id == "${id}"][0]`,
                
              getAuthors: `*[_type == "author"]`,
              getAuthorById: (id) => `*[_type == "author" && _id == "${id}"][0]`,
                }

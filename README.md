# Project Name

> Project description

## Related Projects

- https://github.com/HROneForAll/fec-photo-gallery-service
- https://github.com/HROneForAll/fec-photo-gallery-proxy-server
- https://github.com/HROneForAll/fec-service-info
- https://github.com/HROneForAll/fec-proxy-info
- https://github.com/HROneForAll/fec-service-reviews
- https://github.com/HROneForAll/fec-proxy-reviews
- https://github.com/HROneForAll/fec-proxy-suggestions
- https://github.com/HROneForAll/fec-service-suggestions
- https://github.com/HROneForAll/fec-proxy-availability
- https://github.com/HROneForAll/fec-service-availability

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD

Create
Method: POST
Api:'/:listing_id/reviews'
Input: Null
Output: Null
Used: Not used
Read
Method: GET
Api:'/:listing_id/reviews'
Input: Null
Output: Database Review Data , Host Data, User Data
Used: Used to retrieve page data
Update
Method: PUT
Api:'/:listing_id/reviews'
Input: Null
Output: Null
Used: Not used
Delete
Method: DELETE
Api:'/:listing_id/reviews'
Input: Null
Output: Null
Used: Not used

## Example Database entry
{
id: 1,
listingId: 1,
content:
"Commodi vel aut accusantium. Eveniet omnis quas occaecati culpa eum quam. Et officiis et. Et tempora in quam magnam dolore. Maxime consequuntur vero est.",
reviewerName: "Adriana Reynolds",
reviewerPicture: "https://randomuser.me/api/portraits/men/23.jpg",
hostComment:
"Dolor occaecati quibusdam sint consequatur est sunt deserunt. Accusantium asperiores consectetur exercitationem. Reprehenderit sit eaque. Itaque optio rerum rem eum. Sequi porro quia nam beatae cumque. Enim incidunt est fugiat inventore.",
hostName: "River DuBuque",
hostPicture: "https://randomuser.me/api/portraits/men/39.jpg",
createdAt: "2019-01-05T08:01:18.798Z"

}

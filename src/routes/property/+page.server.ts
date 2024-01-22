// import type { PageServerLoad } from './$types';

// const channex_url = process.env.channex_url;
// const channex_api_key = process.env.channex_api_key;
// const channex_api_value = process.env.channex_api_value;



// export const load = (async () => {
//     const res = await fetch(`${channex_url}/meta/OpenShopping/property_list`, {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'user_api_key': `${channex_api_value}`,
//       }),
//     });
    
//     if (res.status === 404) {
//       throw new Error("Not Found");
//     }
    
//     const item = await res.json()
//     return {
//       item,
//     };
// }) satisfies PageServerLoad;
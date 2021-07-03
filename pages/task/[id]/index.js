// import { useRouter } from 'next/router';
// import Layout from '../../../components/Layout';
// function TaskDescription({task}){
//     return (
//         <Layout>
//             <div>{task.description}</div>
//         </Layout>
//     )
// }

// export async function getStaticPaths() {
//     const res = await fetch("https://api-nodejs-todolist.herokuapp.com/task", {
//         headers: {
//           'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
//         }
//       })
//     const tasks = await res.json();
//     const taskIds = tasks.data;
//     const taskId = taskIds.map(taskIds => taskIds._id);
    
//     const paths = taskId.map(id => ({params: {
//         id : id.toString()
//     }}))
//     return { paths,
//         fallback: true, }
// }

// export async function getStaticProps({ params }) {
//     const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${params.id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
//         }
//       })
//     const task = await res.json()
  
//     return {
//       props: { task : task.data },
//       revalidate: 1,
//     }
//   }

// export default TaskDescription;
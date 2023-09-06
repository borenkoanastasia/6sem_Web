// // // loadDataByField;
// function make_finder_page_meta_data(
//   name: string,
//   data_save: Ref<CardMeta[]>,
//   meta_save: Ref<PageMeta>,
//   child_name: Ref<string>
// ) {
//   if (!PageConstructs[name]) {
//     return false;
//   }

//   meta_save.value = PageConstructs[name].meta;

//   function elements_to_card_meta(departments: Entity[]) {
//     data_save.value = [];
//     departments.forEach((element) => {
//       data_save.value?.push(PageConstructs[name].to_carder(element));
//     });
//   }
//   const error = ref(new MyError(null, null));

//   loadAllData(
//     PageConstructs[name].data_name_loader,
//     ref([]),
//     error,
//     elements_to_card_meta
//   );

//   console.log(error);

//   if (error.value.name) return false;

//   child_name.value = ChildPageNameConstruct[name];

//   return true;
// }

// export { make_elements_page_meta_data };

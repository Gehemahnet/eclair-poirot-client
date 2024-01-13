import type {FetchError} from 'ofetch';

export default function(error: FetchError) {
  const {$i18n} = useNuxtApp();
  console.error(error);
  switch (error.status) {
  case 422: {
    console.error($i18n.t('error.fetch.422'));
  }
  }
}

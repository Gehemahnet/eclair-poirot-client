import {FetchError} from 'ofetch';

export default function(error: FetchError) {
  const {t} = useI18n();
  console.log(error);
  switch (error.status) {
  case 422: {
    console.log(t('error.fetch.422'));
  }
  }
}

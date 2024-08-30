<template>
  <div>
    <div class="flex gap-4">
      <MDaterangepicker
        v-model="date"
        mode="datetime"
      />
      <UButton
        @click="fetchAlarms"
      >
        Terapkan
      </UButton>
    </div>
    <div>
      <div class="flex flex-wrap mt-4">
        <div
          v-for="(alarm, alarmIdx) in listAlarm"
          :key="`event-${alarmIdx}`"
          class="w-2/6 flex flex-col p-2"
        >
          <ACctv
            :id="`event-${alarmIdx}`"
            :src="alarm.ChannelId"
            :width="400"
            :height="200"
            class="flex-1 block"
            display-current-quality
          />
          <div class="flex flex-col py-2">
            <span>{{ alarm.ChannelName }}</span>
            <span>{{ alarm.EventComment }}</span>
          </div>
        </div>
      </div>
      <ALoadMore @visible="handleLoadMore" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sub } from 'date-fns'

const { $loader } = useNuxtApp()

const toast = useToast()
const date = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })
const alarms = ref([])
const listAlarm = ref([])

const fetchAlarms = async () => {
  try {
    $loader.start()
    const startDate = new Date(date.value.start)
    const startDay = String(startDate.getUTCDate()).padStart(2, '0')
    const startMonth = String(startDate.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth is zero-indexed
    const startYear = startDate.getUTCFullYear()
    const startHours = String(startDate.getUTCHours()).padStart(2, '0')
    const startMinutes = String(startDate.getUTCMinutes()).padStart(2, '0')
    const startSeconds = String(startDate.getUTCSeconds()).padStart(2, '0')

    const endDate = new Date(date.value.end)
    const endDay = String(endDate.getUTCDate()).padStart(2, '0')
    const endMonth = String(endDate.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth is zero-indexed
    const endYear = endDate.getUTCFullYear()
    const endHours = String(endDate.getUTCHours()).padStart(2, '0')
    const endMinutes = String(endDate.getUTCMinutes()).padStart(2, '0')
    const endSeconds = String(endDate.getUTCSeconds()).padStart(2, '0')
    const body = {
      startTimeUtc: `${startDay}.${startMonth}.${startYear} ${startHours}:${startMinutes}:${startSeconds}`,
      endTimeUtc: `${endDay}.${endMonth}.${endYear} ${endHours}:${endMinutes}:${endSeconds}`,
      cameraIds: [
        'bf93631f-5459-4c43-9c22-5039643dcafb',
        'eaad8f31-9369-4fef-9868-7f6dfd657498',
        'ae2a57dd-7faf-430d-8ff6-d6272b16cf4d',
        '7fb39283-3659-43b4-b582-628ecc7e0da5',
        'd3458ce5-b84a-4b5b-8502-aedecfced82f',
        '7edb65a7-89ec-42a5-b273-f52df7befdc5',
        'e9192eb9-da4e-4ae1-95e5-19298166a346',
        'e1794711-41bb-4e30-ae04-24e21a3c566d',
        '46cb5528-2bde-4912-8938-2a755881b11e',
        '151c38cf-c49b-4374-b5a5-027c4aa9a0d4',
        'fc7492af-0e52-4f55-b476-9ce1ada5f0d4',
        '2f7a47d5-964a-4789-a8d8-642d100ac2cc',
        '458c33dc-c041-4b10-8811-49688293bb74',
        'ad6832d7-f15f-4694-827c-d5a14245e8fa',
        '5bb8c9fa-17f3-477c-9350-a43494f4742e',
        'bab5459e-5844-42e4-9e6f-4547465e1122',
        'fd1ed985-b4cb-4ab7-9cf3-2e5ef41aa9ce',
        '9dfd58fc-30c3-4915-838b-f1e543c83ce8',
        '1884745d-c100-4869-a8e1-78be3a19c0bf',
        '42cfc7cb-b59f-47bb-86d8-9ecdc4cdfc99',
        '3f66636c-0370-4507-8f0a-8e572de2100e',
        '22248956-99aa-4ad9-b88b-b410e4d54c13',
        'e726acdf-6194-4471-88f7-159790713a23',
        'a9eb0f08-12bd-47ab-b009-1dc7cf71af83',
        'b24c5382-df7d-42a0-b117-56a3c7ea253e',
        '7282a72b-4128-438b-a2cf-4df323e92d25',
        'dab37d61-c7d2-43c8-921e-1fa70078e8ae',
        '4b11bfd1-66c4-4d56-b002-3f65ee1e49b2',
        '56c8b1a3-b946-4ed7-92e2-1231bb72e85d',
        'a3b55942-b281-40e7-bbf6-7560c5ec1804',
        '1035f521-c7bf-4139-b971-f1d8148ffe62',
        '381bcc4a-0000-4c7f-8de4-a10b61f39f17',
        'c03415aa-2b58-4b6f-a6f3-4bb7b1bdb4aa',
        'bb111166-29a9-4741-8403-c73cc00f9066',
        '064bf56e-5b74-4b85-b0be-42f5452d5ab7',
        '7f023619-5ee8-484f-a6a9-54a4cd3c070f',
        '00000000-0000-0000-0000-000000000000',
      ],
      eventCategories: [1],
      eventInitiatorTypes: [0, 2, 8, 4, 1, 3],
      eventInitiators: [
        '91baab3e-ef9d-48c6-b803-2e70f4475960',
        'd31a5962-fe63-49f6-8c1d-6824cb13c796',
        '61fe78a3-b04b-41cc-adc5-5dc078e8d7a9',
        '1ba821fe-e1de-454f-b774-69888a62b70d',
        '1f124ec2-a777-42f6-b99f-6ff133a8b2b8',
      ],
      eventIds: [
        'bcad095a-f2b0-4c20-a7f0-88ee5da703b1',
        '78b29013-a3e3-4050-a43f-52cbfce25e61',
        '65afbe3d-41b2-41d2-802a-dbd2a00db0ed',
        '919f7bf5-aea4-4bc1-8f55-e0271c7ad620',
        '43b38e36-dc99-41b7-98f2-1e4ffc7ce912',
        'bcad095a-f2b0-4c20-a7f0-88ee5da703b1',
        '78b29013-a3e3-4050-a43f-52cbfce25e61',
        '90e32fea-f091-467c-ac2e-9767a2f257e8',
        '99fff35a-0902-4ab3-a6cf-74cea73dffd6',
        'e42e713a-1238-40b2-8a33-bdb298f80d86',
        '779ec56d-37c0-43c5-a782-5ad78e65cd6f',
        'c9d6d086-c965-4cf8-aef6-85b3894e3a4a',
        '427f1cc3-2c2f-4f50-8865-56ae99c3610d',
        '0ed0d3d9-69f3-424f-b364-410bac21d0bc',
        '657129ca-ca95-4c20-8869-40e8fc910f50',
        '74b6545a-08c7-4175-bde0-917b54133bcf',
        '463fb0af-4273-40a1-bd42-90ce564d847a',
        'd99a411f-d0a6-42c4-b320-3c2dd0aa0821',
        '43b38e36-dc99-41b7-98f2-1e4ffc7ce912',
        '0339cba3-05e3-449e-b24a-a7b1abe51837',
        '2d2d7761-8001-40d5-924e-9868f57d8ae7',
        '64be3942-0611-401e-8bac-177c3504969e',
        'd6f631e7-5f67-420a-9103-99e7ac54e723',
        'af4d0d43-6d3a-443a-b4e1-86dfccf206a7',
        '1ea1d5e9-5d33-4bfc-8c29-c934b0dbcefb',
        '7da43299-9c0d-4043-9183-e947b5f6bdca',
        'b0536c2f-2f09-4969-bf1a-9fb847b87d21',
        '65afbe3d-41b2-41d2-802a-dbd2a00db0ed',
        '919f7bf5-aea4-4bc1-8f55-e0271c7ad620',
      ],
      isSearchFromBegin: false,
      searchLimitCount: 200,
    }
    const resp = await $fetch('/api/alarm', {
      method: 'POST',
      body,
    })
    alarms.value = resp.map((item, itemIdx) => ({ idx: itemIdx, ...item }))
  } catch (err) {
    toast.add({ description: JSON.stringify(err) })
  } finally {
    $loader.finish()
  }
}
const handleLoadMore = () => {
  const idx = listAlarm.value.length
  const items = alarms.value?.slice(idx, 10 + idx)
  listAlarm.value.push(...items)
}

onMounted(async () => {
  await fetchAlarms()
  await handleLoadMore()
})
</script>

<style scoped>

</style>

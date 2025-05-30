import { Link } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, Text, View, YStack } from 'tamagui'

import { MessageInput } from '@/components/message-input'
import { TopEntry } from '@/components/top-entry'

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1}>
        {/* 顶部导航组件 */}
        <TopEntry />

        {/* 主要内容区域 */}
        <YStack flex={1} justifyContent="center" alignItems="center">
          <Link screen="Settings" params={{}}>
            <Stack>
              <Text>Go to Settings</Text>
            </Stack>
          </Link>
        </YStack>

        {/* 底部输入框 */}
        <View
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          paddingHorizontal="$2"
          paddingBottom="$2"
          backgroundColor="$background"
          borderTopWidth={1}
          borderTopColor="$borderColor">
          <MessageInput />
        </View>
      </YStack>
    </SafeAreaView>
  )
}

export default HomeScreen

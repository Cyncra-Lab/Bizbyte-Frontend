import BottomSheet from "@gorhom/bottom-sheet";
import { AlertTriangle, X } from "lucide-react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { Pressable, Text, View } from "react-native";

interface AddProductBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AddProductBottomSheet = ({
  visible,
  onClose,
  onConfirm,
}: AddProductBottomSheetProps) => {
    
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%"], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) onClose();
    },
    [onClose]
  );

  console.log(visible);

  return (
    <BottomSheet
      ref={sheetRef}
      index={visible ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onChange={handleSheetChanges}
      backgroundStyle={{ borderRadius: 20 }}
    >
      <View className="px-4 py-6">
        {/* Close Icon */}
        <Pressable className="absolute top-4 right-4" onPress={onClose}>
          <X size={20} color="#9ca3af" />
        </Pressable>

        {/* Warning Icon */}
        <View className="items-center mb-4">
          <View className="bg-yellow-100 rounded-full p-2">
            <AlertTriangle size={28} color="#facc15" />
          </View>
        </View>

        {/* Title and Description */}
        <Text className="text-center text-lg font-semibold text-gray-800 mb-1">
          Add Product
        </Text>
        <Text className="text-center text-sm text-gray-500 mb-6">
          Do you want to add this product?
        </Text>

        {/* Buttons */}
        <View className="flex-row justify-between">
          <Pressable
            onPress={onClose}
            className="flex-1 border border-gray-300 py-3 mr-2 rounded-lg items-center"
          >
            <Text className="text-gray-700 font-medium">Cancel</Text>
          </Pressable>

          <Pressable
            onPress={onConfirm}
            className="flex-1 bg-purple-600 py-3 ml-2 rounded-lg items-center"
          >
            <Text className="text-white font-medium">Add Product</Text>
          </Pressable>
        </View>
      </View>
    </BottomSheet>
  );
};

export default AddProductBottomSheet;

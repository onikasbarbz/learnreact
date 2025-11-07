import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const BANNER = require('../Assets/Addvertisement.png');
const SAMPLE_CARD = require('../Assets/laviegarden.png');

export default function UserHomepage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.deliveryLabel}>Delivery location</Text>
            <Text style={styles.deliveryPlace}>
              Herald College Kathmandu, Naxal
            </Text>
          </View>
          <View style={styles.helpCircle}>
            <Text style={styles.helpText}>?</Text>
          </View>
        </View>

        {/* White rounded panel */}
        <View style={styles.panel}>
          {/* Search */}
          <View style={styles.searchRow}>
            <TextInput
              placeholder="Search Restaurant"
              placeholderTextColor="#9aa0a6"
              style={styles.searchInput}
            />
          </View>

          {/* Banner carousel (static image for now) */}
          <View style={styles.bannerWrap}>
            <Image source={BANNER} resizeMode="cover" style={styles.banner} />
            <View style={styles.pagination}>
              <View style={[styles.dot, { opacity: 1 }]} />
              <View style={[styles.dot, { opacity: 0.4 }]} />
              <View style={[styles.dot, { opacity: 0.4 }]} />
            </View>
          </View>

          {/* Categories */}
          <View style={styles.categoriesRow}>
            {['Restaurant', 'Bakery', 'Fruits & Veg', 'Grocery'].map(
              (label, i) => (
                <View key={i} style={styles.catItem}>
                  <View style={styles.catCircle} />
                  <Text style={styles.catLabel}>{label}</Text>
                </View>
              ),
            )}
          </View>

          {/* Section: Recommended for you */}
          <Text style={styles.sectionTitle}>Recommended for you</Text>

          {Array.from({ length: 1 }).map((_, i) => (
            <View key={i} style={styles.card}>
              <Image source={SAMPLE_CARD} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <View style={styles.cardTopRow}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>5 Left</Text>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingText}>★ 3.9</Text>
                  </View>
                </View>

                <Text style={styles.cardTitle}>The Midpoint Bakery</Text>
                <Text style={styles.cardSubtitle}>Surprise Bag</Text>
                <Text style={styles.cardEnds}>Ending by 7:00 PM</Text>

                <View style={styles.cardFooter}>
                  <Text style={styles.priceOld}>NRP.1700</Text>
                  <Text style={styles.priceNew}>NRP.510</Text>
                </View>
              </View>
            </View>
          ))}

          {/* Restaurants Section */}
          <Text style={styles.sectionTitle}>Restaurants</Text>
          <View style={styles.cardSmall}>
            <Image source={SAMPLE_CARD} style={styles.cardImageSmall} />
            <View style={styles.cardBodySmall}>
              <Text style={styles.cardTitleSmall}>Lavie Garden</Text>
              <Text style={styles.cardSubtitleSmall}>Surprise Bag</Text>
              <View style={styles.cardFooterSmall}>
                <Text style={styles.priceNewSmall}>NRP.440</Text>
              </View>
            </View>
          </View>

          {/* Buffet Section */}
          <Text style={styles.sectionTitle}>Buffets</Text>
          <View style={styles.cardSmall}>
            <Image source={SAMPLE_CARD} style={styles.cardImageSmall} />
            <View style={styles.cardBodySmall}>
              <Text style={styles.cardTitleSmall}>Buddha Party Palace</Text>
              <Text style={styles.cardSubtitleSmall}>Non-veg & Veg Buffet</Text>
              <View style={styles.cardFooterSmall}>
                <Text style={styles.priceNewSmall}>NRP.600</Text>
              </View>
            </View>
          </View>

          {/* Charity CTA */}
          <View style={styles.charityCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.charityTitle}>Support a local charity</Text>
            </View>
            <TouchableOpacity style={styles.donateBtn}>
              <Text style={styles.donateText}>Donate</Text>
            </TouchableOpacity>
          </View>

          {/* Near me */}
          <Text style={styles.sectionTitle}>Near me</Text>
          <View style={styles.cardSmall}>
            <Image source={SAMPLE_CARD} style={styles.cardImageSmall} />
            <View style={styles.cardBodySmall}>
              <Text style={styles.cardTitleSmall}>Drishya Restaurant</Text>
              <Text style={styles.cardSubtitleSmall}>Surprise Bag</Text>
              <View style={styles.cardFooterSmall}>
                <Text style={styles.priceNewSmall}>NRP.350</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavWrap}>
        <View style={styles.tabLeft}>
          <TouchableOpacity style={styles.tabIcon}>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fab}>
          <TouchableOpacity style={styles.homeBtn}>
            <Text style={{ fontSize: 20 }}>🏠</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabRight}>
          <TouchableOpacity style={styles.tabIcon}>
            <Text>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#26493f' },
  scroll: { paddingBottom: 120 },
  header: {
    paddingTop: 44,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryLabel: { color: '#cfe6dd', fontSize: 12 },
  deliveryPlace: { color: '#fff', fontWeight: '700', marginTop: 6 },
  helpCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpText: { color: '#fff', fontWeight: '700' },

  panel: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 18,
    marginTop: 10,
    minHeight: 700,
  },
  searchRow: { marginTop: 6, marginBottom: 12 },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 22,
    paddingHorizontal: 18,
    height: 44,
    fontSize: 16,
  },

  bannerWrap: { marginTop: 6, alignItems: 'center' },
  banner: { width: width - 72, height: 120, borderRadius: 12 },
  pagination: { flexDirection: 'row', marginTop: 8 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2b5d4f',
    marginHorizontal: 4,
  },

  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingHorizontal: 6,
  },
  catItem: { alignItems: 'center', width: (width - 72) / 4 },
  catCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#dfeee3',
    marginBottom: 6,
  },
  catLabel: { fontSize: 12, color: '#4b514f' },

  sectionTitle: {
    marginTop: 18,
    backgroundColor: '#e9f0ea',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    color: '#1b3d34',
    fontWeight: '700',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e6efea',
  },
  cardImage: { width: '100%', height: 150 },
  cardBody: { padding: 12 },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#2b5d4f',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { color: '#fff', fontSize: 12 },
  rating: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: { color: '#fff' },
  cardTitle: { fontWeight: '700', marginTop: 8 },
  cardSubtitle: { color: '#6b6f6d' },
  cardEnds: { color: '#9aa0a6', marginTop: 6 },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceOld: { color: '#9aa0a6', textDecorationLine: 'line-through' },
  priceNew: { color: '#1b6b4f', fontWeight: '700' },

  cardSmall: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e6efea',
  },
  cardImageSmall: { width: 110, height: 90 },
  cardBodySmall: { flex: 1, padding: 10 },
  cardTitleSmall: { fontWeight: '700' },
  cardSubtitleSmall: { color: '#6b6f6d' },
  cardFooterSmall: { marginTop: 8 },
  priceNewSmall: { color: '#1b6b4f', fontWeight: '700' },

  charityCard: {
    backgroundColor: '#26493f',
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  charityTitle: { color: '#fff', fontWeight: '700', fontSize: 16 },
  donateBtn: {
    backgroundColor: '#f4b23a',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  donateText: { color: '#fff', fontWeight: '700' },

  bottomNavWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 14,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLeft: { position: 'absolute', left: 40, bottom: 14 },
  tabRight: { position: 'absolute', right: 40, bottom: 14 },
  tabIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: { position: 'absolute', bottom: 0, alignSelf: 'center' },
  homeBtn: {
    width: 72,
    height: 72,
    backgroundColor: '#fff',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Work',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'Create Playlist',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Favorites',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Product',
    path: '/library'
  },
  {
    title: 'UX Research',
    path: '/library/podcasts'
  },
  {
    title: 'Design Engineering',
    path: '/library/artists'
  },
  {
    title: 'Favorite Albums',
    path: '/library/albums'
  }
]
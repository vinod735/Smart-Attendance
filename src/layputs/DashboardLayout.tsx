import React, {useEffect} from 'react'
import {Link, Outlet, useNavigate} from "react-router-dom";
import {getLocalKey, removeLocalKey} from "../helpers/sessionKey";

import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
  BellIcon,
  ChartBarIcon,
  HomeIcon,
  MenuAlt2Icon,
  ClockIcon,
  UserGroupIcon,
  XIcon,
  UserIcon,
  AcademicCapIcon,
  OfficeBuildingIcon,
  CogIcon
} from '@heroicons/react/outline'
import {SearchIcon} from '@heroicons/react/solid'
import classNames from "../utils/classNames";
import BreadCrumb from "../components/reusable/BreadCrumb";
import {useMutation} from "@apollo/client";
import {VERIFY_TOKEN} from "../pages/Auth/graphql";

const navigation = [
  {name: 'Dashboard', href: '/', icon: HomeIcon, current: false},
  {name: 'Company', href: '/company', icon: OfficeBuildingIcon, current: false},
  {name: 'Department', href: '/department', icon: UserGroupIcon, current: false},
  {name: 'Shift', href: '/shift', icon: ClockIcon, current: false},
  {name: 'Employee', href: '/employee', icon: UserIcon, current: false},
  {name: 'Designation', href: '/designation', icon: AcademicCapIcon, current: false},
  {name: 'Report', href: '/report', icon: ChartBarIcon, current: false},
  {name: 'Attendance Setting', href: '/setting', icon: CogIcon, current: false},
]

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const [logout, setLogout] = useState<boolean>(false)

  const [verifyToken, {
    loading: verificationLoading,
  }] = useMutation(VERIFY_TOKEN);


  const handleLogout = () => {
    navigate("/login")
    removeLocalKey("token");
  }

  const handleTokenVerification = async () => {
    const response = await verifyToken({
      variables: {
        token: getLocalKey("token")
      }
    })
    response.data.verifyToken.success ? setLogout(false) : setLogout(true)
  }

  useEffect(() => {
    handleTokenVerification()
    if (logout) {
      navigate('/login')
    }
  }, [window.location.pathname])

  const getPagesLink = () => {
    let pages: any = []
    let links = window.location.pathname.split('/')
    if (links.length === 2) {
      links.map((item: string, index: number) => (
        index !== 0 && pages.push({
          "name": item?.toUpperCase(),
          "href": `/${item}`,
          "current": links.length - 1 === index
        })
      ))
    } else {
      links.map((item: string, index: number) => (
        index !== 0 && index !== links.length - 1 && pages.push({
          "name": item?.toUpperCase(),
          "href": links.length - 2 === index ? "#" : `/${item}`,
          "current": links.length - 2 === index
        })
      ))
    }
    return pages
  }

  return (
    <>
      {/*<div>
        <div className={"w-full h-14 fixed"} style={{
          backgroundColor: "#9921e8",
          backgroundImage: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"
        }}>
          <div className={"flex justify-between p-2"}>
            <div className={"flex-none w-20"}>logo</div>
            <div>Global Search</div>
            <div onClick={handleLogout}>Logout</div>
          </div>
        </div>
        <div className={"flex"}>
          <div className={"w-56 h-screen pt-14"} style={{
            backgroundColor: "#9921e8",
            backgroundImage: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"
          }}>SideBar
          </div>
          <div className={"flex flex-col justify-between"}>
            <div className={"pt-16 px-4"}><Outlet/></div>
            <div className={"px-2 py-1"}>Footer</div>
          </div>
        </div>
      </div>*/}

      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 flex z-40 md:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://dibtech.com.au/static/media/dibtech_logo.0fd71b49.png"
                    alt="Dibtech Smart Attendance"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"/>
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden bg-indigo-700 md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://dibtech.com.au/static/media/dibtech_logo.0fd71b49.png"
                  alt="Dibtech Smart Attendance"
                />
              </div>
              <div className="mt-5 flex-1 flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                        aria-hidden="true"/>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div
            className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div
                    className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search your employee"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true"/>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({open}) => (
                    <>
                      <div>
                        <Menu.Button
                          className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://download.flaticon.com/download/icon/2354573?icon_id=2354573&author=571&team=571&keyword=Account&pack=2354527&style=Basic+Outline&style_id=1215&format=png&color=%23000000&colored=1&size=512&selection=1&premium=0&type=standard&token=03AGdBq27JyUF-34Im0VYgFYSLnPAH8QWzXqzt6Isa_XV2YrXSPbdhUaI_9bx9bfPG7LhJ5boj3aDPnbobz_vtPqvGhh3A3CCGyvpyCHV_RBoOStrWIywUJRGeO9QosSGUcHk77_M33m9l2nGW1bzn1AixGVXNKRPpCBdIS1ld7ju-G4mRGJLrYwVK7qjicSz_RYVrbfyO7dz6i708QlomgHKIVQHisXv7YUIu7r4rTlS4--YhlLnD4kOpf0C3tBMwd67LYwoDvZsnM7FoMeZl1nOM1Du4Vz9pZQurLxRWttFl-IiaDWm5Tcu_RQfXXsBwv1Dh0m6tNEZQSblBUEkoF2Hy_rZ4nkw4nSZoVvUtxA93gnsCjBBL48IrvUP85jWT1nsoSxtnZwf_zmu0QAz5FiEoaaBTFxUXlKJpPeWs-pIoxl-Tzp_CmqBDLu4TWCKgx_KXFh_Wqb6C43_Q2WdAclbYj0iE-v6AAryaaK9TDxO_44plqMrV2163SATtm_w9isycLUcPBw79tZSzP7igIGw3DrL9JclGpBFMjeor8q3KhE_RWUiKNlFA43m207o6-S9PjlTWA9FownWeoYlT0kgSxTlrwDVWvhewR5XEk5qLMRrUfBIzf62xHLkS3SamAeiEnvYRuucIkt5ieQvz63xfEegteqVIo6j6Kp6KxtRRJa8q-TKDfzvjJWn6chiuaLQB6mYYErnTM5P7UEYTKcAivnRx_JcRxafJdRZYw8AQkQBf5rVpxtWuFH-8Szlb8s0_31k-b-PD_-SCIsd924GVMASZ4su1BTQpKDFCH-hiKj64F0xBt6ez2CAViY2_39nqKdrJwvb9sSyHE2YvPVmUS8H85l-qn50cvnRT6d-r_ztB6-azCEn5zFJ2URa0hscIW-WbCuamuAUEJvqWz4bY92Qj51DvDWtMue2r2zfEfN-DmqfzRjrLHaKAv7zndQoY65ggc_Ulq1YFKMwulzYWcLtSA-b9dcTeQQ8srImp8T7wztjFLUsSEXb8HWbT4dZD8BYBwkFkPuwG2Ar4-8TRf6avnkrmaqInvTSjmFhgquH9BoC8CE5CWp9RHCWHX_MmKNSOd5PiW5APiS9I4VKR_3MdhaX8WKIghqvf9KI6VmNg-Pdc4zaXNJqyK3ekQgJFbRi9v7NVXd6nNsVM2NHGWhbyhwADmNzs2U31Lef_fV5D1HwVU4YMemq6ywkjzcVwXJos2YlI&search=user"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            <Link to={"/profile"}
                                  className={classNames('block px-4 py-2 text-sm text-gray-700')}>Profile</Link>
                          </Menu.Item>
                          <Menu.Item onClick={handleLogout}>
                            <Link to={"/login"}
                                  className={classNames('block px-4 py-2 text-sm text-gray-700')}
                            >
                              <>Logout</>
                            </Link>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
          <BreadCrumb pages={getPagesLink()}/>
          <main className="flex-1 relative overflow-y-scroll focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Outlet/>
              </div>
            </div>
          </main>
        </div>
      </div>

    </>
  )
}

export default DashboardLayout
